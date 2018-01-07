$(document).ready(function(){

var randomNumber;
var cumulativeValue = 0;
var purple;
var green;
var pink;
var blue;
var winCount = 0;
var lossCount = 0;


var initialize = function() {
    cumulativeValue = 0;
    randomNumber = 18 + Math.floor(Math.random() * 120);
    blue = 1 + Math.floor(Math.random() * 12);
    pink = 1 + Math.floor(Math.random() * 12);
    green = 1 + Math.floor(Math.random() * 12);
    purple = 1 + Math.floor(Math.random() * 12);

    $("#randomNumber").html(randomNumber);
    $("#cumulativeValue").html(cumulativeValue);
    $("#winCount").html(winCount);
    $("#lossCount").html(lossCount);
}

initialize();

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

