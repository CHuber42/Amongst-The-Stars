import React from "react";
import Planet from "./Planet";
import { Model, asset, AmbientLight, View } from "react-360";

let SolarPlanets = 
[
  {
    name: "Mercury",
    source: { obj: asset("mercury/earth.obj"), mtl: asset("mercury/earth.mtl")},
    lit: true,
    diameter: 4878,
    translate: [60, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 59x
  },
  {
    name: "Venus",
    source: { obj: asset("venus/earth.obj"), mtl: asset("venus/earth.mtl")},
    lit: true,
    diameter: 12104,
    translate: [55, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 243x
  },
  {
    name: "Earth",
    source: { obj: asset("earth/earth.obj"), mtl: asset("earth/earth.mtl")  },
    lit: true,
    diameter: 12742,
    rotateX: 0,
    rotateZ: -21,
    rotateY: 0,
    translate: [48, 0, -100],
    update: true
    //days: 23:56hrs
  },
  {
    name: "Mars",
    source: { obj: asset("mars/earth.obj"), mtl: asset("mars/earth.mtl") },
    lit: true,
    diameter: 6794,
    translate: [42, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 24:37hrs
  },
  {
    name: "Jupiter",
    source: { obj: asset("jupiter/earth.obj"), mtl: asset("jupiter/earth.mtl")  },
    lit: false,
    diameter: 142984,
    translate: [15, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 9:55hrs
  },
  {
    name: "Saturn",
    source: { obj: asset("saturn/earth.obj"), mtl: asset("saturn/earth.mtl") },
    lit: true,
    diameter: 120536,
    translate: [-25, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 10:39hrs
  },
  {
    name: "Uranus",
    source: { obj: asset("uranus/earth.obj"), mtl: asset("uranus/earth.mtl") },
    lit: true,
    diameter: 49532,
    translate: [-55, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 17:14hrs
  },
  {
    name: "Neptune",
    source: { obj: asset("neptune/earth.obj"), mtl: asset("neptune/earth.mtl") },
    lit: true,
    diameter: 51118,
    translate: [-80, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    update: true
    //days: 16:07hrs
  }
]

class SolarSystem extends React.Component
{
  constructor(){
    super();
    this.planets = SolarPlanets;
    this.state = {
      activeFragment: 0,
      rotation: 0
    }
  }

  render(){
    let displayedFragment;
    if (this.state.activeFragment === 0)
    {
      displayedFragment =      
        this.planets.map((planet) => 
          <Planet 
            name={planet.name}
            lit={true}
            source={planet.source}
            rotateX={planet.rotateX}
            rotateY={planet.rotateY}
            rotateZ={planet.rotateZ}
            translate={planet.translate}
            diameter={planet.diameter}
            update={planet.update}
            globalRotation={this.props.globalRotation}
            parentCoordinates={this.props.parentCoordinates}
          />
        )
    }
    else
    {
      displayedFragment = null;
    }

    return(
      <View>
        {displayedFragment}
      </View>
      );
  }
}

export default SolarSystem;


