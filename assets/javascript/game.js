// Psuedocode

// Create an object with the following:
// var randomNumber: Generate a random number at start of game 
// button1
// button2
// button3
// button4
// Add button click value to total score
// If total score equals random number, you win. If total score equals beyond random number you lose.
// reset game either way
// How to get game to reset? 

$(document).ready(function() {

	// create rondomNumber
	var randomNumber = Math.floor(Math.random() * 120) + 19;
	$("#randomNumber").html("Random Number: " + randomNumber);
	var totalScore = 0;
	var loss = 0;
	var wins = 0;
	var crystal1 = Math.floor(Math.random() * 12) + 1;
	console.log(crystal1);
	var crystal2 = Math.floor(Math.random() * 12) + 1;
	console.log(crystal2);
	var crystal3 = Math.floor(Math.random() * 12) + 1;
	console.log(crystal3);
	var crystal4 = Math.floor(Math.random() * 12) + 1;
	console.log(crystal4);
	
	function reset() {
		var newRandomNumber = Math.floor(Math.random() * 120) + 19;
		$("#randomNumber").html("Random Number: " + newRandomNumber);
		randomNumber = newRandomNumber;
		totalScore = 0;
		$("#totalScore").html(totalScore);
		crystal1 = Math.floor(Math.random() * 12) + 1;
		console.log(crystal1);
		crystal2 = Math.floor(Math.random() * 12) + 1;
		console.log(crystal2);
		crystal3 = Math.floor(Math.random() * 12) + 1;
		console.log(crystal3);
		crystal4 = Math.floor(Math.random() * 12) + 1;
		console.log(crystal4);

	};

	$("#crystal1").on("click", function() {
		// crystal1 = Math.floor(Math.random() * 10);
		totalScore = totalScore + crystal1;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
			reset();
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
			reset();
		};


	})

	$("#crystal2").on("click", function() {
		totalScore = totalScore + crystal2;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
			reset();
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
			reset();
		}; 

	})

	$("#crystal3").on("click", function() {
		totalScore = totalScore + crystal3;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
			reset();
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
			reset();
		}; 

	})

	$("#crystal4").on("click", function() {
		totalScore = totalScore + crystal4;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
			reset();
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
			reset();
		}; 

	})
	// console.log(totalScore);




});

