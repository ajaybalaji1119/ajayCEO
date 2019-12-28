
var questions = [
     {
           prompt: "Which is the national animal of india?\n(a) Bengal Tiger\n\ (b) Lion\n(c) Leopard",
           answer: "a"
     },
     {
          prompt: "Which is the most popular language?\n(a) Python\n\ (b) Java\n(c) C",
          answer: "a"
     },
     {
          prompt: "Which stream creates lots of job opportunities ?\n(a) Data science\n\ (b) web development\n(c) Android",
          answer: "a"
     }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);


