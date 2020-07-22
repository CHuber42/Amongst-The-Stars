import { Model } from "react-360";

export default class Orbit extends React.Model
{
  constructor()
  {
    super();
    this.Eccentricity = FutureWork3;
    this.ParentFocus = [Parent.TrueX, Parent.TrueY, Parent.TrueZ];
    this.EmptyFocus = ParentFocus + FutureWork4; //REQUIRES Galactic Orientation of Orbit
    this.RotationY = FutureWork5; //Tilt of Orbital Plane relative to Galactic Plane
    this.source = {obj: asset('Orbit2.obj'), mtl: asset('Orbit2.mtl')}
  }
}

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
// lit={true}
/> */}

