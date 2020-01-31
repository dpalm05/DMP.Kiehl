function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function letsPlay() {
	var startBet = document.getElementById("bet").value;
	var money = startBet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWins = 0;
	var rolls = 0;
	var maxRolls = 0;

	if(money <=0) {
		alert("Your starting bet needs to be greater than $0.");
	}

	else {
		while(money > 0) {
			firstDie = rollDice();
			secondDie = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;

			if(diceSum != 7) {
				money--;
				console.log("You lost");
			}

			else{
				money += 4;
				if(money > maxWins) {
					maxWins += (money-maxWins);
					maxRolls = rolls;
				}
				console.log("You win");
			}
		}


	}
	document.getElementById("results").style.display = "block";
	document.getElementById("submitButton").innerText = "Play Again?";
	document.getElementById("start").innerText = startBet;
	document.getElementById("numRolls").innerText = rolls;
	document.getElementById("largestWin").innerText = maxWins;
	document.getElementById("rollCount").innerText = maxRolls;
	return false;
}