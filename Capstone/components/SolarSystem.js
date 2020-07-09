import React from "react";
import Planet from "./Planet";
import { Model, asset, AmbientLight, View } from "react-vr";

let SolarPlanets = 
[
  {
    name: "Mercury",
    source: { obj: asset("mercury/earth.obj") },
    lit: true,
    diameter: 4878,
    translate: [60, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 59x
  },
  {
    name: "Venus",
    source: { obj: asset("venus/earth.obj") },
    lit: true,
    diameter: 12104,
    translate: [55, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 243x
  },
  {
    name: "Earth",
    source: { obj: asset("earth/earth.obj"), mtl: asset("earth/earth.mtl") },
    lit: true,
    diameter: 12742,
    rotateX: 20,
    rotateY: 180,
    rotateZ: -10,
    translate: [0, 0, -5]
    //days: 23:56hrs
  },
  {
    name: "Mars",
    source: { obj: asset("mars/earth.obj") },
    lit: true,
    diameter: 6794,
    translate: [42, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 24:37hrs
  },
  {
    name: "Jupiter",
    source: { obj: asset("jupiter/earth.obj")},
    lit: true,
    diameter: 142984,
    translate: [15, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 9:55hrs
  },
  {
    name: "Saturn",
    source: { obj: asset("saturn/earth.obj") },
    lit: true,
    diameter: 120536,
    translate: [-25, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 10:39hrs
  },
  {
    name: "Uranus",
    source: { obj: asset("uranus/earth.obj") },
    lit: true,
    diameter: 49532,
    translate: [-55, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
    //days: 17:14hrs
  },
  {
    name: "Neptune",
    source: { obj: asset("neptune/earth.obj") },
    lit: true,
    diameter: 51118,
    translate: [-80, 0, -100],
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
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
            lit={planet.lit}
            source={planet.source}
            rotateX={planet.rotateX}
            rotateY={planet.rotateY}
            rotateZ={planet.rotateZ}
            translate={planet.translate}
            diameter={planet.diameter}
            globalRotation={this.props.globalRotation}
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


