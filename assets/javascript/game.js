$(document).ready(function(){

//set variables needed to play game

var randomNumber;
var cumulativeValue = 0;
var purple;
var green;
var pink;
var blue;
var winCount = 0;
var lossCount = 0;

// initialize the value of each variable used to play the game (leave win/los count as global as it is captured for each game played)

var initialize = function() {
    cumulativeValue = 0;
    randomNumber = Math.floor(Math.random() * ((120-19) +1) + 19);
    blue = Math.floor(Math.random() * 12) + 1;
    pink = Math.floor(Math.random() * 12) + 1;
    green = Math.floor(Math.random() * 12) + 1;
    purple = Math.floor(Math.random() * 12) + 1;

    $("#randomNumber").html(randomNumber);
    $("#cumulativeValue").html(cumulativeValue);
    $("#winCount").html(winCount);
    $("#lossCount").html(lossCount);
}

// call initialize function to play/start

initialize();


// check and count win/losses, initialize when complete
var winCheck = function() {
	if(cumulativeValue == randomNumber) {
		winCount++;
		alert("Winner!!");
		$("#winCount").html(winCount);
		initialize();
	} else if (cumulativeValue > randomNumber) {
		lossCount++;
		alert("You lost this game!");
		$("#lossCount").html(lossCount);
		initialize();
	}
}

// functions that will add each crystal's value and add to the user's value

$("#purple").on("click", function() {
    cumulativeValue = cumulativeValue + purple;
    $("#cumulativeValue").html(cumulativeValue);
    console.log(cumulativeValue);
    winCheck();
})

$("#green").on("click", function() {
    cumulativeValue = cumulativeValue + green;
    $("#cumulativeValue").html(cumulativeValue);
    console.log(cumulativeValue);
    winCheck();
})

$("#pink").on("click", function() {
    cumulativeValue = cumulativeValue + pink;
    $("#cumulativeValue").html(cumulativeValue);
    console.log(cumulativeValue);
    winCheck();
})

$("#blue").on("click", function() {
    cumulativeValue = cumulativeValue + blue;
    $("#cumulativeValue").html(cumulativeValue);
    console.log(cumulativeValue);
    winCheck();
})
});

