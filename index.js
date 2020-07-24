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
  Surface
} from 'react-360';
import SolarSystem from './components/SolarSystem';
import ContextRing from './components/ContextRing';
import { SurfaceShape } from 'react-360-web/js/Compositor/Surface';
import CurrentPost from "./components/CurrentPost";

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

    // //////////////////////////////
  
    let SolStar = <Model // SUN
                    style={{
                      transform : [
                        {translate: [280, 0, -100]},
                        {scale: .5}
                      ]
                    }}
                    source={{obj: asset("sol/sol.obj"), mtl: asset('sol/sol.mtl')}}
                    lit={true}         
                    />
    
    this.stars=[SolStar];


    
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

  render() {

    return (
      <View>
        <Pano source={{ uri: this.spaceSkymap }}/>
        <SolarSystem globalRotation={this.state.rotation}/>
        {this.stars[0]}
      </View>
    );
  }
};



AppRegistry.registerComponent("capstone", () => capstone);
AppRegistry.registerComponent("CurrentPost", () => CurrentPost);
