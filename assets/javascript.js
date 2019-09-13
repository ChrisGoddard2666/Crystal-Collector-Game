
var random_result;
var lost;
var win;

for (var i=0; i < 4; i++)
var random= Math.floor(Math.random()*12);
var crystal = $("<div>");
crystal.attr ("class", "crystal");
$ ('.crystals') append (crystal);


// a game with 4 crystals and a random result between 1-12
// a new random number should generate every single time we win or loose
// when clicking any crystal, it should adding with the previous result
// until it equals the total score
// if it is greater than the random result, we decrement a loss counter then we start over
// If it is greater than the Random Result, we decrement a lost countere
// If it is equal, then we increment a win counter
