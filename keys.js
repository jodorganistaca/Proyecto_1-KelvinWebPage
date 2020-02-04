var KEY = { RIGHT:39, UP:38, LEFT:37, DOWN:40, SPACE:32, A:65, D:68, S:83, W:87 };
var keyLeft = false;
var keyRight = false;
var keyUp = false;
var keyDown = false;
var keySpace = false;

function keyD(event) {
	var code = event.keyCode;
	switch(code) {
		case KEY.UP:
		keyUp = true;
		break;

		case KEY.LEFT:
		keyLeft = true;
		break;

		case KEY.RIGHT:
		keyRight = true;
		break;

		case KEY.DOWN:
		keyDown = true;
		break;

		case KEY.SPACE:
		keySpace = true;
		break;
		
		case KEY.W:
		keyUp = true;
		break;

		case KEY.A:
		keyLeft = true;
		break;

		case KEY.D:
		keyRight = true;
		break;

		case KEY.S:
		keyDown = true;
		break;
	}
}

function keyU(event) {
	var code = event.keyCode;
	switch(code) {
		case KEY.UP:
		keyUp = false;
		break;

		case KEY.LEFT:
		keyLeft = false;
		break;

		case KEY.RIGHT:
		keyRight = false;
		break;

		case KEY.DOWN:
		keyDown = false;
		break;

		case KEY.SPACE:
		keySpace = false;
		break;
		
		case KEY.W:
		keyUp = false;
		break;

		case KEY.A:
		keyLeft = false;
		break;

		case KEY.D:
		keyRight = false;
		break;

		case KEY.S:
		keyDown = false;
		break;
	}
}
