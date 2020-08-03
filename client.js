// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, Module} from 'react-360-web';
import KeyboardCameraController from './components/KeyboardCameraController';
import MouseLockCameraController from '@martinpham/react-360-mouse-lock-camera-controller';

let cameraLocation;

class LocationModule extends Module 
{
  constructor(ctx){
    super('LocationModule');
    this._ctx = ctx;
  }

  getCameraLocation(cb){
    if (this._ctx){
      this._ctx.invokeCallback(cb,[cameraLocation]);
    }
  }
}


function init(bundle, parent, options = {}) {

  const Hud = new Surface(1000, 200, Surface.SurfaceShape.Flat);
  
  const capstone = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      ctx => new LocationModule(ctx),
    ],
    frame: () => {
      updateHud();
    },
    ...options,
  });

  function updateHud(){
    Hud.setAngle(
      -(Math.atan(capstone._cameraQuat[0]/capstone._cameraQuat[2]) + Math.PI/2)*2, //X/Z Rotation with Camera
      (Math.atan(capstone._cameraQuat[0]/capstone._cameraQuat[3]))*2 + Math.PI/8 
    );
    Hud._mesh.position.set(
      Hud._mesh.position.x + cameraLocation[0],
      Hud._mesh.position.y + cameraLocation[1], 
      Hud._mesh.position.z + cameraLocation[2]);
  }

  capstone.controls.addCameraController(new KeyboardCameraController()); // hacky
  capstone.controls.addCameraController(new MouseLockCameraController(capstone._eventLayer)); // hacky

    // CAPSULE

    // Rotate Right 1/4: camquat0/camquat2; transition from 1.57 to .78
    
    cameraLocation = capstone._cameraPosition;
    // cameraQuat = capstone._cameraQuat;
    
    
    capstone.renderToLocation(
      capstone.createRoot('capstone'),
      capstone.getDefaultLocation(),
    );
    
    const rightPanel = new Surface(1200, 200, Surface.SurfaceShape.Flat);
    // rightPanel.setAngle(0, Math.PI/8);
    capstone.renderToSurface(
      capstone.createRoot('CurrentPost'),
      Hud,
      );

    console.log(capstone)
  // Load the initial environment
  // capstone.compositor.setBackground(capstone.getAssetURL('chess-world.jpg'));
}


window.React360 = {init};
