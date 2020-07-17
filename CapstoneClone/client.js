// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import KeyboardCameraController from '@martinpham/react-360-keyboard-camera-controller';
import MouseLockCameraController from '@martinpham/react-360-mouse-lock-camera-controller';
// import Capstone from './index';

function init(bundle, parent, options = {}) {
  const capstone = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });


  // capstone.controls.clearCameraControllers();
  capstone.controls.addCameraController(new KeyboardCameraController()); // hacky
  capstone.controls.addCameraController(new MouseLockCameraController(capstone._eventLayer)); // hacky

  // Render your app content to the default cylinder surface
  // capstone.renderToSurface(
  //   capstone.createRoot('capstone', { /* initial props */ }),
  //   capstone.getDefaultSurface()
  // );

capstone.renderToLocation(
  capstone.createRoot('capstone'),
  capstone.getDefaultLocation(),
);

  // console.log(capstone.controls)
  // Load the initial environment
  // capstone.compositor.setBackground(capstone.getAssetURL('chess-world.jpg'));
}

window.React360 = {init};
