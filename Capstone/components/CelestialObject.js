import { Model, asset } from "react-vr";
import Locus from "./LocusCalculator";

class CelestialObject extends Model
{
  constructor(props)
  {
    super(props);
    this.source={obj: asset(props.ObjectFile), mtl: asset(props.MaterialFile)}
    [this.TrueX, this.TrueY, this.TrueZ] = Locus(props.RAngle, props.DAngle, props.Distance); 
    this.TrueScale = props.TrueScale;
    this.lit = props.lit
  };
}

export default CelestialObject;