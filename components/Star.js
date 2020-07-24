import CelestialObject from "./CelestialObject";
import React from "react";
import {Model, asset, VrButton} from "react-360"
import SolarSystem from "./SolarSystem";


class Star extends React.Component
{
  constructor(props)
  {
    super();
    this.lit = true;
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


  render(){
    let displayedStar = <Model // SUN
                          style={{
                            transform : [
                              {translate: [280, 0, -100]},
                              {scale: .5}
                            ]
                          }}
                          source={{obj: asset("sol/sol.obj"), mtl: asset('sol/sol.mtl')}}
                          lit={true}         
                          />
    if(this.expanded){
      return (
        <VrButton onClick={() => console.log("hi")}>
          {displayedStar}
        </VrButton>
        <View>
          <SolarSystem/>
        </View>
      )
    }
    else{
      return (
        <VrButton onClick={() => console.log("hi")}>
          {displayedStar}
        </VrButton>
      )
    }
    
  }
}

export default Star;

