// Trivia questions and answer are set to 10
// set a default times for each question or for the entire set of trivia questions to 30 seconds
// create a question with a h2 or h3 tag and display that question
// create buttons for each of the questions which on click should do an action
// create an on click jquery function on that, upon click we compare the right answer  
//upon correct or wrong answers increment the correct answers by one or the incorrect answer by 1
// repeat this for the set of 10 questions
// if the timer runs out, end the game and diplay the number or correct and incorrect answers
// without page refresh we have a reset game function that we display and upon click of that we reset the game
var remaningTime = 30;
//this var is to hold the start game functionality
var startGame;
//this var is to hold the game completed functionality
var gameCompleted;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var numOfCorrectAnswered;
var numOfInCorrectAnswered;
var numOfUnanswered;
$("#startGame").on("click", startTrivia);

function startTrivia(){
    startGame = setInterval(timeRemaining, 1000);

};
function timeRemaining(){
    remaningTime--;
    $("#timeRemaining").html("<h2>"+remaningTime+"</h2>");
    if (remaningTime === 0){
        gameCompleted();
    }
};
function gameCompleted(){
    correctAnswers+=numOfCorrectAnswered;
    incorrectAnswers+=numOfIncorrectAnswered;
    unAnswered+=numOfUnanswered;
};
function answers(){
    
};
