import CelestialObject from "./CelestialObject";
import React from "react";
import {Model} from "react-vr";
import {PlanetaryScale} from "./GlobalVarsAndFunctions";

class Planet extends React.Component
{
  constructor(props)
  {
    super();
    this.lit = props.lit
    this.source = props.source,
    this.name = props.name,
    this.moons = [],
    this.children = [],
    this.rateOfRotation = 5,
    this.style = {
      transform: [
        { translate: props.translate },
        { scale: props.diameter/PlanetaryScale },
        { rotateX: props.rotateX },
        { rotateY: props.rotateY },
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
        { rotateY: this.props.rotateY + this.props.globalRotation },
        { rotateZ: this.props.rotateZ }
    ]}
  }


  render(){
    return (
      <Model
        source={this.source}
        lit={this.lit}
        name={this.name}
        style={this.style}
      />
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

