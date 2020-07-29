import CelestialObject from "./CelestialObject";
import React from "react";
import {Model, asset, VrButton, View} from "react-360";
import {PlanetaryScale} from "./GlobalVarsAndFunctions";
import ContextRing from "./ContextRing";

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
    this.expanded = false,
    this.parentCoordinates = props.parentCoordinates,
    this.coordinates = props.translate,
    this.style = {
      transform: [
        { translate: props.parentCoordinates },
        { scale: props.diameter/PlanetaryScale },
        { rotateY: props.rotateY },
        { rotateX: props.rotateX },
        { rotateZ: props.rotateZ }
    ]}
  }

  toggleExpanded(){
    this.expanded = !this.expanded;
  }

//ROTATE NEXT
  componentDidUpdate(){
    let prevX = this.style.transform[0].translate[0];
    let prevY = this.style.transform[0].translate[1];
    let prevZ = this.style.transform[0].translate[2];
    let targetX = this.coordinates[0];
    let targetY = this.coordinates[1];
    let targetZ = this.coordinates[2];
    let newX = targetX;
    let newY = targetY;
    let newZ = targetZ;

    if(Math.abs(prevX - targetX) >= .001){
      newX = .05*(targetX - prevX) + prevX;
    }
    if(Math.abs(prevY != targetY) >= .001){
      newY = .05*(targetY - prevY) + prevY;
    }
    if(Math.abs(prevZ != targetZ) >= .001){
      newZ = .05*(targetZ - prevZ) + prevZ; 
    }
    
    this.style = {
      transform: [
        { translate: [newX, newY, newZ] },
        { scale: this.props.diameter/PlanetaryScale },
        { rotateX: this.props.rotateX },
        { rotateZ: this.props.rotateZ },
        { rotateY: this.props.rotateY + this.props.globalData.rotation }
    ]}
  }

  shouldComponentUpdate(){

    if (this.style.transform[0].translate[0] != this.coordinates[0]){
      return true;
    }
    else if (this.style.transform[0].translate[1] != this.coordinates[1]){
      return true;
    }
    else if (this.style.transform[0].translate[2] != this.coordinates[2]){
      return true;
    }
    else{
      return this.update;
    }
  }


  render(){
    let displayedPlanet = <Model
                            source={this.source}
                            lit={this.lit}
                            name={this.name}
                            style={this.style}
                          />;
    let contextRing = <ContextRing 
                            parentCoordinates={this.style.transform[0].translate} 
                            globalData={this.props.globalData} 
                            scale={this.style.transform[1].scale}
                          />;
                      
    if (this.expanded){
      return (
        <VrButton onClick={() => this.toggleExpanded()}>
          {displayedPlanet}
          {contextRing}
        </VrButton>
      )
    }
    else{
      return (
        <VrButton onClick={() => this.toggleExpanded()}>
         {displayedPlanet}
        </VrButton>
      )
    }
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

