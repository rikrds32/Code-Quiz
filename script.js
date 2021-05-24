// variables for the quiz//

var pos= 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, chE, correct = 0, seconds = 75;

var questions = [
{
      question: "What does HTML stand for?",
      a:"Hypertrophic Management Language",
      b:"Hypertext Main Language",
      c:"Hypertext Markup Language",
      answer:"C"
    },
{
      question: "What does CSS stand for?",
      a:"Cascading Style Software",
      b:"Cascading Style Sheets",
      c:"Customize Style Sheets",
      answer:"B"
    },  
{
      question: "What is JavaScript",
      a:"Is a Programing Languge",
      b:"Is a Computer Game",
      c:"Is a web application",
      answer:"A"
    },
{
      question: "What is the main use of HTML?",
      a:"Add style to a web page",
      b:"Structure a web page and its content",
      c:"Enable the funcionality of a web page",
      answer:"B"
    },
{
      question: "What does JavaScript do?",
      a:"Give you instructions for web searching",
      b:"Gives web pages interactive elements",
      c:"Allow the writing of files on server machines",
      answer:"B"
    }  
]; 

// timer function //

function timer(){
    var interval;
interval=setInterval(function() {
        var timer= document.getElementById("timer")
        seconds--;
        timer.textContent = seconds;
    if(seconds == 0){
        clearInterval(interval);
    }
        
    }, 1000);
}

// function render question to display on a page//

function renderQuestion(quiz) {
    quiz = document.getElementById("quiz");

   document.getElementById("quiz_status") .innerHTML = "Question"+(pos+1)+" of "+questions.lenght;

   var question = questions[pos].question; 
   chA = questions[pos].a;
   chB = questions[pos].b;
   chC = questions[pos].c;
   chD = questions[pos].d;
   chE = questions[pos].e;

// display question //

   quiz.innerHTML = "<h3>"+question+"</h3>";

//diaplay anwer options//

quiz.innerHTML += "<label> <input type='radio' name='choices' value= 'A'>" +chA+"</label><br>";
quiz.innerHTML += "<label> <input type='radio' name='choices' value= 'B'>" +chB+"</label><br>";
quiz.innerHTML += "<label> <input type='radio' name='choices' value= 'C'>" +chC+"</label><br><br>";
quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";

}
function checkAnswer() {
    quiz = document.getElementById("quiz");
    choices = document.getElementsByName ("choices");
    for(var i=0; i<choices.lenght; i++){
        if(choices[i].checked){
            choice = choices [i] .value;
        }
    }
// make sure andwer matches correct choice//

if(choice == questions[pos].answer){
    correct++;
}
pos++;
if(pos === 5) {
    quiz.innerHTML = "<h2>You Got "+correct+" of "+questions.lenght+" Questions Correct</h2>";
    document.getElementById("quiz_status") .innerHTML = "Quiz Completed";
// resets variables to allow users restart the quiz//

pos = 0;
correct = 0;
return false;
}
renderQuestion();
}
window.addEventListener("load", renderQuestion);

function myFunction() {
    document.getElementById("timer").innerHTML="timer";
    alert('Time is Over');
  }
window.addEventListener("click", timer); 

window.console.log('Code Quiz');

