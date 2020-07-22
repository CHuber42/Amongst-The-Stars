function Locus(RAngle, DAngle, D)
{
  let XCoordinate = Math.cos(RAngle) * D;
  let YCoordinate = Math.sin(DAngle) * D;
  let ZCoordinate = Math.sin(RAngle) * (-1) * D;
  return [XCoordinate, YCoordinate, ZCoordinate];
}

export default Locus;
