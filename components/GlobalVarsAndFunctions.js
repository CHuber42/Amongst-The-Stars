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
    const XZDistance = Math.sqrt(Math.pow((playerX - objectX),2) + Math.pow((playerZ - objectZ), 2));
    const YDistance = (playerY - objectY);
    let yAxisRotation = Math.atan((playerX - objectX)/(playerZ - objectZ))/(2*Math.PI)*360;
    if(playerZ <= objectZ){
        yAxisRotation += 180;
    }
    let xAxisRotation = -Math.atan((YDistance/XZDistance))/(2*Math.PI)*360;
    relativeRotation[1] = yAxisRotation;
    relativeRotation[0] = xAxisRotation;
    return relativeRotation;
}