import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  AmbientLight,
  StyleSheet,
  PointLight,
  DirectionalLight,
  SpotLight,
  controls,
  Surface,
  NativeModules
} from 'react-360';
import SolarSystem from './components/SolarSystem';
import ContextRing from './components/ContextRing';
import { SurfaceShape } from 'react-360-web/js/Compositor/Surface';
import Star from "./components/Star";

const LocationModule = NativeModules.LocationModule;


const sol = [
  {
    translate: [280, 0, -100],
    scale: .5,
    source: {obj: asset("sol/sol.obj"), mtl: asset('sol/sol.mtl')},
    lit: true
  }
]

export default class capstone extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      rotation: 0,
      zoom: 0,
    }
    this.spaceSkymap = 
    [
      "../static_assets/space_right.png",
      "../static_assets/space_left.png",
      "../static_assets/space_up.png",
      "../static_assets/space_down.png",
      "../static_assets/space_back.png",
      "../static_assets/space_front.png"
    ];
    this.styles = StyleSheet.create
    ({
      menu: {
        flex: 1,
        flexDirection: "column",
        width: 1,
        alignItems: "stretch",
        transform: [{ translate: [2, 2, -5] }]
      }
    });

    this.lastUpdate = Date.now();
    this.rotate = this.rotate.bind(this);   
    this.cameraLocation = [0, 0, 0];
  }
  
  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
      rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  getCamera(){
    LocationModule.getCameraLocation(someLocation => {
      this.cameraLocation = someLocation;
    });
  }

  render() {
    this.getCamera();
    return (
      <View>
        <Pano source={{ uri: this.spaceSkymap }}/>
          <AmbientLight intensity={1.6} />
        <Star attributes={sol[0]} globalRotation={this.state.rotation}/>
      </View>
    );
  }
};



AppRegistry.registerComponent("capstone", () => capstone);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
