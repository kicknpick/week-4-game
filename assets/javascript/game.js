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
	var randomNumber = Math.floor(Math.random() * 100);
	$("#randomNumber").html(randomNumber);
	var totalScore = 0;
	var loss = 0;
	var wins = 0;
	var crystal1 = Math.floor(Math.random() * 10);
	var crystal2 = Math.floor(Math.random() * 20);
	var crystal3 = Math.floor(Math.random() * 50);
	var crystal4 = Math.floor(Math.random() * 5);

	
	// function reset() {
	// 	var randomNumber = Math.floor(Math.random() * 100);
	// 	$("#randomNumber").html(randomNumber);
	// 	var totalScore = 0;
	// 	var crystal1 = Math.floor(Math.random() * 10);
	// 	var crystal2 = Math.floor(Math.random() * 20);
	// 	var crystal3 = Math.floor(Math.random() * 50);
	// 	var crystal4 = Math.floor(Math.random() * 5);
	// };

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
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
		}; 

	})

	$("#crystal3").on("click", function() {
		totalScore = totalScore + crystal3;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
		}; 

	})

	$("#crystal4").on("click", function() {
		totalScore = totalScore + crystal4;
		$("#totalScore").html(totalScore);
		
		if (totalScore > randomNumber) {
			loss ++;
			$("#loss").html("Losses: " + loss);
		} else if (totalScore == randomNumber) {
			wins ++;
			$("#wins").html("Win total: " + wins);
		}; 

	})
	console.log(totalScore);




});

