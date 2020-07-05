import CelestialObject from "./CelestialObject";
import React from "react-vr";


class Star extends CelestialObject
{
  constructor(props)
  {
    super();
    this.lit = true;
  }

  UpdateGalacticSphere()
  {
    let displayDistance, displayX, displayY, displayZ, displayScale;
    let relativeDistance = ((this.TrueX - CameraX)**2 + (this.TrueY - CameraY)**2 + (this.TrueZ - CameraZ)**2)**(1/2);
    if (relativeDistance > 1000)
    {
      displayDistance = 1000;
      displayX = (this.TrueX + cameraX) / relativeDistance * displayDistance;
      displayY = (this.TrueY + cameraY) / relativeDistance * displayDistance;
      displayZ = (this.TrueZ + cameraZ) / relativeDistance * displayDistance;
      displayScale = 1; //FUTUREWORK - SHRINK IT TO SOME CONSTANT
    }
    else
    {
      displayDistance = relativeDistance;
      displayX = this.TrueX;
      displayY = this.TrueY;
      displayZ = this.TrueZ;
      displayScale = 1; //FUTUREWORK - FUNCTION OF DISTANCE TO OBJECT WHEN < 1000
    }

    this.style = {
      transform: [
        { translate: (displayX, displayY, displayZ)},
        { scale: displayScale }
      ]
    }
  }
}

export default Star;

