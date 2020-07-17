/**
 * Martin <i@martinpham.com>
 */

import {Vector3, Quaternion} from 'three';


const SPEED = 0.04;
const JUMP_HEIGHT = 30;
const MAXSPEED = 1;

class ObjectNotation {
	position = null;
	quaternion = null;

	constructor(position, quaternion) {
		this.position = position;
		this.quaternion = quaternion;
	}

	translateOnAxis = (axis, distance) => {
		const v1 = new Vector3();

		v1.copy(axis).applyQuaternion(this.quaternion);

		this.position.add(v1.multiplyScalar(distance));

	};

	translateX = (distance) => {
		this.translateOnAxis(new Vector3(1, 0, 0), distance);
	};
	translateY = (distance) => {
		this.translateOnAxis(new Vector3(0, 1, 0), distance);
	};
	translateZ = (distance) => {
		this.translateOnAxis(new Vector3(0, 0, 1), distance);
	};
}


export default class KeyboardCameraController {
	_movingZ = 0;
	_movingX = 0;
	_movingY = 0;

	constructor() {


		document.addEventListener('keydown', (event) => this._onKeyDown(event));


		// window.addEventListener("message", (event) => {
		// 	if(event.data.type ==='KEYBOARD_CAMERA_CONTROLLER_MESSAGE')
		// 	{
		// 		if(event.data.direction ==='UP')
		// 		{
		// 			this._moveForward();
		// 		}else if(event.data.direction ==='DOWN')
		// 		{
		// 			this._moveBackward();
		// 		}else if(event.data.direction ==='LEFT')
		// 		{
		// 			this._moveLeft();
		// 		}else if(event.data.direction ==='RIGHT')
		// 		{
		// 			this._moveRight();
		// 		}else if(event.data.direction ==='SPACE')
		// 		{
		// 			this._jump();
		// 		}
		// 	}
		// }, false);
	}

	_moveForward = () => {
		this._movingZ += -SPEED;
	}

	_moveBackward = () => {
		this._movingZ += SPEED;
	}

	_moveLeft = () => {
		this._movingX += -SPEED;
	}

	_moveRight = () => {
		this._movingX += SPEED;
	}

	_jump = () => {
		this._movingY += SPEED;
	}

	_onKeyDown = (event) => {
		if (event.keyCode === 38 || event.keyCode === 87) {
			this._moveForward();
		}
		if (event.keyCode === 40 || event.keyCode === 83) {
			this._moveBackward();
		}
		if (event.keyCode === 37 || event.keyCode === 65) {
			this._moveLeft();
		}
		if (event.keyCode === 39 || event.keyCode === 68) {
			this._moveRight();
		}
		else if (event.keyCode === 32) {
			this._jump();
		}
	}

	fillCameraProperties(positionArray, rotationArray) {

		if (this._movingZ === 0 && this._movingX === 0 && this._movingY === 0) {
			return false;
		}


		const quaternion = new Quaternion(rotationArray[0], rotationArray[1], rotationArray[2], rotationArray[3]);
		const position = new Vector3(positionArray[0], positionArray[1], positionArray[2]);

		const cameraObjectNotation = new ObjectNotation(position, quaternion);

		
		cameraObjectNotation.translateY(this._movingY);
		cameraObjectNotation.translateX(this._movingX);
		cameraObjectNotation.translateZ(this._movingZ);
		if(this._movingZ >= MAXSPEED){
			this._movingZ = MAXSPEED;
		}
		if(this._movingX >= MAXSPEED){
			this._movingX = MAXSPEED;
		}
		if(this._movingY >= MAXSPEED){
			this._movingY = MAXSPEED;
		}
		positionArray[0] = cameraObjectNotation.position.x;
		positionArray[1] = cameraObjectNotation.position.y; 
		positionArray[2] = cameraObjectNotation.position.z;
		this._movingZ *= .85;
		this._movingX *= .85;
		this._movingY *= .85;
	
		// if(this._movingX !== 0)
		// {
		// 	cameraObjectNotation.translateX(this._movingX);
		// 	positionArray[0] = cameraObjectNotation.position.x;
		// 	positionArray[1] = cameraObjectNotation.position.y; // i don't want to fly
		// 	positionArray[2] = cameraObjectNotation.position.z;
		// 	this._movingX *= .85;
		// }


		// if(this._movingY !== 0)
		// {
		// 	cameraObjectNotation.translateY(this._movingY);
		// 	positionArray[0] = cameraObjectNotation.position.x;
		// 	positionArray[1] = cameraObjectNotation.position.y; // i don't want to fly
		// 	positionArray[2] = cameraObjectNotation.position.z;
		// 	this._movingY *= .85;
		// }


		return true;
	}
}
