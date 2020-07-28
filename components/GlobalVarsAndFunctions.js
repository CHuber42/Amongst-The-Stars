import React from "react";

export var PlanetaryScale = 2548400;

export function CalculateRelativeAngles(player, object){
    let relativeRotation = [0, 0, 0];
    const objectX = object[0];
    const objectY = object[1];
    const objectZ = object[2];
    const playerX = player[0];
    const playerY = player[1];
    const playerZ = player[2];
    const XZDistance = Math.sqrt((playerX - objectX)**2 + (playerZ - objectZ)**2);
    const YDistance = (playerY - objectY);
    const yAxisRotation = Math.atan((playerX - objectX)/(playerZ - objectZ))/(2*Math.PI)*360;
    const xAxisRotation = -Math.atan((YDistance/XZDistance))/(2*Math.PI)*360;
    relativeRotation[1] = yAxisRotation;
    relativeRotation[0] = xAxisRotation;
    // console.log((playerX - objectX), (playerY - objectY), playerZ - objectZ, relativeRotation);
    return relativeRotation;
}