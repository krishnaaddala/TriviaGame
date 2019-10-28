// Trivia questions and answer are set to 10
// set a default times for each question or for the entire set of trivia questions to 30 seconds
// create a question with a h2 or h3 tag and display that question
// create buttons for each of the questions which on click should do an action
// create an on click jquery function on that, upon click we compare the right answer  
//upon correct or wrong answers increment the correct answers by one or the incorrect answer by 1
// repeat this for the set of 10 questions
// if the timer runs out, end the game and diplay the number or correct and incorrect answers
// without page refresh we have a reset game function that we display and upon click of that we reset the game
// $( document ).ready(function() {
//     var remaningTime = 30;
//     timeRemaining();
// });
var triviaQuestions = [{
    question: "Superman makes his first appearance in 'Action Comics' #1, Vol. 1. What is the cover date (month and year)?",
    answerArr: ["1937", "1939", "1938", "1940"],
    correctChoice: "1938"
},
{
    question: "Created in 1968, Carol Danvers has undergone numerous code name changes during her publication history. Which of the follow is NOT a name she has employed?",
    answerArr: ["Warbird", "Binary", "Captain Marvel", "Photon"],
    correctChoice: "Photon"
},
{
    question: "In addition to Hal Jordan and Alan Scott, The Green Lantern also uses which name as a secret identity?",
    answerArr: ["Kyle Rayner", "Barry Allen", "Britt Reid", "Ryan Renolds"],
    correctChoice: "Kyle Rayner"
},
{
    question: "With the special memory fibre in his cape, Batman is able to …",
    answerArr: ["Communicate with Batmobile", "Slowly Fall", "Use as a shield", "Cloak himself"],
    correctChoice: "Slowly Fall"
},
{
    question: "Doom, the enemy of Fantastic Four, stole the Power Cosmic from which villain?",
    answerArr: ["Count Abyss", "Galactus", "Living Monolith", "Silver Surfer"],
    correctChoice: "Galactus"
},
{
    question: "What are the claws of Wolverine made of?",
    answerArr: ["Cadmium", "Adamantium", "Titanium", "Plastic"],
    correctChoice: "Adamantium"
},
{
    question: "Debuting in 1965, which superhero is also known as Goliath and Ronin?",
    answerArr: ["Hawkeye", "The Beast", "Iron Man", "Green Arrow"],
    correctChoice: "Hawkeye"
},
{
    question: "Which of the following superhero can manipulate and resist the weather?",
    answerArr: ["Red Tornado", "The Atom", "Storm", "Captain Planet"],
    correctChoice: "Storm"
},
{
    question: "What villain got his distinctive appearance from toxic chemicals at a plant?",
    answerArr: ["Joker", "Doomsday", "Green Goblin", "Two-Face"],
    correctChoice: "Two-Face"
},
{
    question: "Which superhero cannot transform back into the human form anymore?",
    answerArr: ["The Incredible Hulk", "Jacob", "Cyclops", "The Thing"],
    correctChoice: "The Thing"
}
];
//this var is to hold the start game functionality
var startGame;
//this var is to hold the game completed functionality
var gameCompleted;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var numOfCorrectAnswered = 0;
var numOfInCorrectAnswered = 0;
var numOfUnanswered = 0;
var userChoice;
// $("#startGame").on("click", startTrivia);

// function startTrivia() {
//     $("#startGame").hide();
//     startGame = setInterval(timeRemaining, 1000);

// };
// function timeRemaining() {
//     remaningTime--;
//     $("#timeRemaining").html("<h2>" + remaningTime + "</h2>");
//     if (remaningTime <= 0) {
//         gameCompleted();
//     }
// };
// function gameCompleted() {
//     remaningTime =0;
//     $("#allDone").html("<h2> All Done! </h2>");
//     // correctAnswers+=numOfCorrectAnswered;
//     // incorrectAnswers+=numOfIncorrectAnswered;
//     // unAnswered+=numOfUnanswered;
// };
// function answers() {
//     for (i=0; i< triviaQuestions.length; i++){

//     }
// };
var interval = 2;
    function testTimer() {
        setInterval(decrement, 1000);
    }

    function decrement() {
        if(interval >=0 ) {
            $("#timeRemaining").html("<h2>"+"Time Remaining: " + interval + "</h2>");
        }
        else {
            clearInterval(interval);
            console.log(clearInterval)
            checkAnswers();

        }
        interval--;
    }

function checkAnswers(){
    for(var i = 0 ; i < triviaQuestions.length ; i++) {
//storing radio buttons value in jQuery
        var elem = "input[name=answer" + (i+1) +"]:checked";
        increment($(elem).val(), triviaQuestions[i].correctChoice);
    }
    var queryString = "?ans=" +correctAnswers +"&unans="+unAnswered+"&inAns="+incorrectAnswers;
    window.location.href = "DoneTrivia.html" + queryString;
}

function increment(inputVal, correctVal){

    if(inputVal === correctVal) {
        correctAnswers++;
    }
    else if(inputVal == undefined) {
        unAnswered++;
    }
    else {
        incorrectAnswers++;
    }

}
function gameCompleted(){
var queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);
    var queries = queryString.split("&");
    $("#correctAnswer").html("Correct Answers : " + queries[0].split('=')[1]);
    $('#incorrectAnswer').html("Incorrect Answers : " + queries[2].split('=')[1]);
    $('#unAnswered').html("Unanswered : " + queries[1].split('=')[1]);
}