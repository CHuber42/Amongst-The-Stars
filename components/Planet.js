import CelestialObject from "./CelestialObject";
import React from "react";
import {Model, View, VrButton} from "react-360";
import {PlanetaryScale} from "./GlobalVarsAndFunctions";

class Planet extends React.Component
{
  constructor(props)
  {
    super();
    this.lit = props.lit
    this.source = props.source,
    this.update = props.update,
    this.name = props.name,
    this.moons = [],
    this.children = [],
    this.rateOfRotation = 5,
    this.style = {
      transform: [
        { translate: props.translate },
        { scale: props.diameter/PlanetaryScale },
        { rotateY: props.rotateY },
        { rotateX: props.rotateX },
        { rotateZ: props.rotateZ }
    ]}
  }

//ROTATE NEXT
  componentDidUpdate(){
    this.style = {
      transform: [
        { translate: this.props.translate },
        { scale: this.props.diameter/PlanetaryScale },
        { rotateX: this.props.rotateX },
        { rotateZ: this.props.rotateZ },
        { rotateY: this.props.rotateY + this.props.globalRotation }
    ]}
  }

  shouldComponentUpdate(){
    return this.update;
  }

  myClick(){
    console.log(props.name)
  }


  render(props){
    let displayedPlanet = <Model
                            source={this.source}
                            lit={this.lit}
                            name={this.name}
                            style={this.style}

                          />;
    return (
      <View>
       {displayedPlanet}
      </View>
    )
  }
}

export default Planet;

//   UpdateGalacticSphere()
//   {
//     let displayDistance, displayX, displayY, displayZ, displayScale;
//     let relativeDistance = ((this.TrueX - CameraX)**2 + (this.TrueY - CameraY)**2 + (this.TrueZ - CameraZ)**2)**(1/2);
//     if (relativeDistance > 1000)
//     {
//       displayDistance = 1000;
//       displayX = (this.TrueX + cameraX) / relativeDistance * displayDistance;
//       displayY = (this.TrueY + cameraY) / relativeDistance * displayDistance;
//       displayZ = (this.TrueZ + cameraZ) / relativeDistance * displayDistance;
//       displayScale = 1; //FUTUREWORK - SHRINK IT TO SOME CONSTANT
//     }
//     else
//     {
//       displayDistance = relativeDistance;
//       displayX = this.TrueX;
//       displayY = this.TrueY;
//       displayZ = this.TrueZ;
//       displayScale = 1; //FUTUREWORK - FUNCTION OF DISTANCE TO OBJECT WHEN < 1000
//     }

//     this.style = {
//       transform: [
//         { translate: (displayX, displayY, displayZ)},
//         { scale: displayScale }
//       ]
//     }
//   }
// }

