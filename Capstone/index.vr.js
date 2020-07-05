import React from 'react';
import Button from './button.js';
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
} from 'react-vr';
import SolarSystem from './components/SolarSystem';

export default class Capstone extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      rotation: 130,
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

        {/* <PointLight intensity={6.6}
        style={{
          color: '#ffffff', 
          transform: [{translate: [35, -10, this.state.zoom - 30]}],
          }}
          />
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [15, -10, this.state.zoom - 30]}],
          target: [1, 0, 0],
          color: '#ffffff',
          }}/>
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [55, -10, this.state.zoom - 30]}],
          target: [-1, 0, 0],
          color: '#ffffff',
        }}/>
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [35, -10, this.state.zoom - 10]}],
          target: [0, 0, -1],
          color: '#ffffff',
        }}/>
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [35, -10, this.state.zoom - 50]}],
          target: [0, 0, 1],
          color: '#ffffff',
        }}/>
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [35, 10, this.state.zoom - 30]}],          
          color: '#ffffff',
          target: [0, -1, 0],
        }}/>
        <SpotLight intensity={5.0}
                   distance={80}
        style={{
          transform: [{translate: [35, -30, this.state.zoom - 30]}],
          target: [0, 1, 0],
          color: '#ffffff',
          }}/>  */}
        {/* <View style={this.styles.menu}>
          <Button 
            text='+' 
            callback={() => this.setState(prevState => ({ zoom: prevState.zoom + 10 })) }/>
          <Button 
            text='-' 
            callback={() => this.setState(prevState => ({ zoom: prevState.zoom -10}))}/>
        </View>
    
                  {/* <Model
            style={{
              transform: [
                { translate: [35*.9666, -10, this.state.zoom -30]},
                { rotateX: 90},
                {scaleX: 1},
                {scaleY: 1.0333}
              ]
            }}
            source={{obj: asset('Orbit2.obj'), mtl: asset('Orbit2.mtl')}}
            lit={true}
            />  */}

        <SolarSystem/>
        <Model // SUN
          style={{
            transform : [
              {translate: [35, -10, this.state.zoom - 30]},
              {scale: .025}
            ]
          }}
          source={{obj: asset("./sol/sol.obj"), mtl: asset('/sol/sol.mtl')}}
          lit={true}         
          />
      </View>
    );
  }
};



AppRegistry.registerComponent("Capstone", () => Capstone);

