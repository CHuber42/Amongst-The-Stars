// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';
import KeyboardCameraController from './components/KeyboardCameraController';
import MouseLockCameraController from '@martinpham/react-360-mouse-lock-camera-controller';
import CustomRaycaster from "./components/Raycaster";
// import { MouseRaycaster } from 'react-360-web';




function init(bundle, parent, options = {}) {
  const capstone = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
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


capstone.renderToLocation(
  capstone.createRoot('capstone'),
  capstone.getDefaultLocation(),
);


  // Load the initial environment
  // capstone.compositor.setBackground(capstone.getAssetURL('chess-world.jpg'));
}

window.React360 = {init};
