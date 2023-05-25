var readlineSync = require('readline-sync');


//object highscore: to check if the new highscore is made or not;
var highscore = {
  name: "sameer",
  hiscore: 5,
  scoreProcess() {
    if (score >= highscore.hiscore) {
      console.log("CONGRATULATIONS!!!\nyou have set a new highscore");
      console.log("I SEE YOU ARE A MAN OF CULTURE AS WELL.")
    }
  }
}

// global variable score
var score = 0;

//array of qbject
var questionAnswer = [{
  question: "what is the nickname of monkey.D.luffy:",
  answer: "strawhat"
},
{
  question: "How many swords does zoro uses",
  answer: "three"
},
{
  question: "what is ussops primary weapon:",
  answer: "slingshot"
},
{
  question: "what does nami loves the most in the world:",
  answer: "money"
},
{
  question: "what is sanji's profession:",
  answer: "cook"
},
]

//opration funtion :check if the answer is correct or not;
function operation(ans, ques) {
  if (ans.toUpperCase() == questionAnswer[ques].answer.toUpperCase()) {
    console.log("your answer is correct!");
    score++;
  } else {
    console.log("your answer is wrong!");
  }
}

//welcome function: welcome and get the username;
function welcome() {
  console.log("WORLD OF ONE PIECE");
  var userName = readlineSync.question("What is your name: ");
  console.log("welcome " + userName + " to the ONE PIECE QUIZ");
}

//function quiz: ask question and take answers from the player
function quiz() {
  for (var i = 0; i < questionAnswer.length; i++) {
    var answer = readlineSync.question(questionAnswer[i].question);
    operation(answer, i);
  }
  console.log("your final score is:", +score);
  highscore.scoreProcess();
}

// initalizing welcome function
welcome();
// initailizing quiz function
quiz();
