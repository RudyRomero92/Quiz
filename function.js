//!important
//& And
//*answer to question
//TODO: add
//?question
//^Highlight
//? What are Primitive , Reference types & Methods in JS?
/*
 *In JavaScript, a primitive (primitive value, primitive data type)
 *is data that is not an object and has no methods. There are 7 primitive 
 *data types: string, number, bigint, boolean, undefined, symbol, and null.
 *a primitive variable's information is stored as the value of that variable,
 & whereas a reference variable holds a reference to information related to that variable.
 & Methods are functions stored as object properties
*/
//*Primitive Types
const currentQuestion = document.getElementById('currentQuestion');
const currentAnswers = document.getElementById('currentAnswers');
// Qnum = current question index
let qNum = 0;
//*Reference Types
const questions = [
    {
      question: 'What is 2 + 2?',
      answers: 
      [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'what is a function?',
      answers:
     [
        { text: 'A Method', correct: true },
        { text: ' A Primitive Type', correct: false },
        { text: 'Amazon Prime', correct: false },
        { text: 'Javascript', correct: false }
      ]
    },
    {
      question: 'Is JavaScript Fun?',
      answers:
     [
        { text: 'YES', correct: true },
        { text: 'Kinda', correct: false },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '8', correct: true },
        { text: 'I forgot', correct: false }
      ],
    },
  ];
//log questions array info to console for easier debugging
console.log(questions);

function nextQ(){
//show current question.  
currentQuestion.innerText = questions[++qNum].question;
//show current answer selection for each of answer.
questions[qNum].answers.forEach((answer,index)=>{
 //^only showing last answer in HTML
currentAnswers.innerText = answer.text;
 //?How do I show all of the answers in the current array like in the console?
//^working in console
console.log(answer.text)
});
}
nextQ();