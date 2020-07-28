import CelestialObject from "./CelestialObject";
import React from "react";
import {Model, asset, VrButton, View} from "react-360"
import SolarSystem from "./SolarSystem";
import ContextRing from "./ContextRing";


class Star extends React.Component
{
  constructor(props)
  {
    super();
    this.expanded = false;
  }

  // UpdateGalacticSphere()
  // {
  //   let displayDistance, displayX, displayY, displayZ, displayScale;
  //   let relativeDistance = ((this.TrueX - CameraX)**2 + (this.TrueY - CameraY)**2 + (this.TrueZ - CameraZ)**2)**(1/2);
  //   if (relativeDistance > 1000)
  //   {
  //     displayDistance = 1000;
  //     displayX = (this.TrueX + cameraX) / relativeDistance * displayDistance;
  //     displayY = (this.TrueY + cameraY) / relativeDistance * displayDistance;
  //     displayZ = (this.TrueZ + cameraZ) / relativeDistance * displayDistance;
  //     displayScale = 1; //FUTUREWORK - SHRINK IT TO SOME CONSTANT
  //   }
  //   else
  //   {
  //     displayDistance = relativeDistance;
  //     displayX = this.TrueX;
  //     displayY = this.TrueY;
  //     displayZ = this.TrueZ;
  //     displayScale = 1; //FUTUREWORK - FUNCTION OF DISTANCE TO OBJECT WHEN < 1000
  //   }

  //   this.style = {
  //     transform: [
  //       { translate: (displayX, displayY, displayZ)},
  //       { scale: displayScale }
  //     ]
  //   }
  // }

  toggleExpand(){
    this.expanded = !this.expanded;
  }

  render(){
    let displayedStar = <Model
                          style={{
                            transform : [
                              {translate: this.props.attributes.translate},
                              {scale: this.props.attributes.scale}
                            ]
                          }}
                          source={this.props.attributes.source}
                          lit={this.props.attributes.lit}         
                          />
    if(this.expanded){
      return (
        <View>
          <VrButton onClick={() => this.toggleExpand()}>
            {displayedStar}
          </VrButton>
          <SolarSystem parentCoordinates={this.props.attributes.translate} globalRotation={this.props.globalRotation}/>
          <ContextRing globalRotation={this.props.globalRotation} scale={this.props.attributes.scale} parentCoordinates={this.props.attributes.translate}/>
        </View>
      )
    }
    else{
      return (
        <VrButton onClick={() => this.toggleExpand()}>
          {displayedStar}
        </VrButton>
      )
    }
    
  }
}

export default Star;

