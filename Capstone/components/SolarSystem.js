import React from "react";
import Planet from "./Planet";
import { Model, asset, AmbientLight, View } from "react-vr";

let SolarPlanets = 
[
  {
    name: "Earth",
    source: { obj: asset("earth/earth.obj"), mtl: asset("earth/earth.mtl") },
    lit: true,
    style: {transform: [
      { translate: [0, 0, -30] },
      { scale: 0.005 },
      { rotateY: 130 / 5 },
      { rotateX: 20 },
      { rotateZ: -10 }
    ]},
  },
  {
    name: "Jupiter",
    source: { obj: asset("earth/earth.obj"), mtl: asset("earth/earth.mtl") },
    lit: true,
    style: {
      transform: [
      { translate: [-67, -10, -50] },
      { scale: 0.05 },
      { rotateY: 130 / 5 },
      { rotateX: 20 },
      { rotateZ: -10 }
    ]},
  }
]

class SolarSystem extends React.Component
{
  constructor(props){
    super();
    this.state = {
      activeFragment: 0
    }
  }

  render(){
    let displayedFragment;
    if (this.state.activeFragment === 0)
    {
      displayedFragment =      
        SolarPlanets.map((planet) => 
          <Model 
          // name={planet.name}
          lit={planet.lit}
          source={planet.source}
          style={planet.style}
          />
        )
    }
    else
    {
      displayedFragment = null;
    }

    return(
      <View>
        <AmbientLight intensity={3.6} />
        {displayedFragment}
      </View>
      );
  }
}

export default SolarSystem;
