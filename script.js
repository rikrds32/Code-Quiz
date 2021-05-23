// variables for the quiz//

var pos= 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, chE, correct = 0;

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

//getElementById function //

function get(x) {
    return document.getElementById(x);
}

// function render question to display on a page//

function renderQuestion() {
    quiz = get("quiz");
    if(pos >= questions.lenght) {
        quiz.innerHTML = "<h2>You Got "+correct+" of "+questions.lenght+" Questions Correct</h2>";
        get("quiz_status") .innerHTML = "Quiz Completed";
// resets variables to allow users restart the quiz//

    pos = 0;
    correct = 0;
    return false;
}
   get("quiz_status") .innerHTML = "Question"+(pos+1)+" of "+questions.lenght;

   question = questions(pos).question; 
}

