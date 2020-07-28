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
  const capstone = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      ctx => new LocationModule(ctx),
    ],
    ...options,
  });

  capstone.controls.addCameraController(new KeyboardCameraController()); // hacky
  capstone.controls.addCameraController(new MouseLockCameraController(capstone._eventLayer)); // hacky

    // CAPSULE

  // const rightPanel = new Surface(600, 600, Surface.SurfaceShape.Flat);
  // rightPanel.setAngle(0.6, 0);
  //   capstone.renderToSurface(
  //     capstone.createRoot('CurrentPost'),
  //     rightPanel,
  //   );


  cameraLocation = capstone._cameraPosition;


capstone.renderToLocation(
  capstone.createRoot('capstone'),
  capstone.getDefaultLocation(),
);


  // Load the initial environment
  // capstone.compositor.setBackground(capstone.getAssetURL('chess-world.jpg'));
}


window.React360 = {init};
