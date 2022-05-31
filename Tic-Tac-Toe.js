let playerX = "X";
let player0 = "0";
let xVerify = 1;
let oVerify = 0;

let movesCounter = 1;
let movesOnTheTable = new Array(10);
//Set a value of "null" to all the array elements	
for (let element of movesOnTheTable) {
	element = null;
}

let winnerPlayer;
let verifier = 0;

function playersTurn(clicked_id) {

//Adds "X" or "0" on the table

	if (xVerify === 1 && oVerify === 0) {
		document.getElementById(clicked_id).innerHTML = playerX;
		movesOnTheTable[clicked_id] = playerX;
		verifyWinnerCases(movesCounter);
		xVerify = 0;
		oVerify = 1;
	} else if (xVerify === 0 && oVerify === 1) {
		document.getElementById(clicked_id).innerHTML = player0;
		movesOnTheTable[clicked_id] = player0;
		verifyWinnerCases(movesCounter);
		xVerify = 1;
		oVerify = 0;
	}

	if (movesCounter === 9) {
		xVerify = 0;
		oVerify = 0;
	}
	++movesCounter;
}

//Constantly verifying if any of the below is true, in order to declare the winner

function verifyWinnerCases(movesCounter) {

		if (movesOnTheTable[1] === movesOnTheTable[2] && movesOnTheTable[2] === movesOnTheTable[3] && movesOnTheTable[1] === movesOnTheTable[3]) {
			winnerPlayer = movesOnTheTable[1];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[3] === movesOnTheTable[6] && movesOnTheTable[6] === movesOnTheTable[9] && movesOnTheTable[3] === movesOnTheTable[9]) {
			winnerPlayer = movesOnTheTable[3];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[7] === movesOnTheTable[8] && movesOnTheTable[8] === movesOnTheTable[9] && movesOnTheTable[7] === movesOnTheTable[9]) {
			winnerPlayer = movesOnTheTable[7];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[1] === movesOnTheTable[4] && movesOnTheTable[4] === movesOnTheTable[7] && movesOnTheTable[1] === movesOnTheTable[7]) {
			winnerPlayer = movesOnTheTable[1];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[1] === movesOnTheTable[5] && movesOnTheTable[5] === movesOnTheTable[9] && movesOnTheTable[1] === movesOnTheTable[9]) {
			winnerPlayer = movesOnTheTable[1];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[3] === movesOnTheTable[5] && movesOnTheTable[5] === movesOnTheTable[7] && movesOnTheTable[3] === movesOnTheTable[7]) {
			winnerPlayer = movesOnTheTable[3];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[2] === movesOnTheTable[5] && movesOnTheTable[5] === movesOnTheTable[8] && movesOnTheTable[2] === movesOnTheTable[8]) {
			winnerPlayer = movesOnTheTable[2];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesOnTheTable[4] === movesOnTheTable[5] && movesOnTheTable[5] === movesOnTheTable[6] && movesOnTheTable[4] === movesOnTheTable[6]) {
			winnerPlayer = movesOnTheTable[4];
			if (winnerPlayer != null) {
				winner(winnerPlayer);
			}
		}
		if (movesCounter === 9 && verifier === 0) {
			draw();
		}
}

function winner(winnerPlayer) {
	document.getElementById('endOfMatchMessage').innerHTML += `
		<p class="fw-bold">` + winnerPlayer + ` won the game</p>
		<button type="button" class="btn btn-success" onclick="restart()">REMATCH</button>
	`;
	document.getElementById('grid').classList.add("disable");
	verifier = 1;
}

function draw() {
	document.getElementById('endOfMatchMessage').innerHTML += `
		<p class="fw-bold">Draw</p>
		<button type="button" class="btn btn-danger" onclick="restart()">RESTART</button>
	`;
	document.getElementById('grid').classList.add("disable");
}

function restart() {
	window.location.reload();
}