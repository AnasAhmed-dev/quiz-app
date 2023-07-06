// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArhUeY2RlxQCv2-kilOmUa8lEBzmM3o1c",
  authDomain: "quiz-app-b58c3.firebaseapp.com",
  projectId: "quiz-app-b58c3",
  storageBucket: "quiz-app-b58c3.appspot.com",
  messagingSenderId: "656730426835",
  appId: "1:656730426835:web:f7e9aad9c3008707727326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase()

var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsParent = document.getElementById('optionsParent')
var correctAnswerElement = document.getElementById('correctAnswer')

var options = []
var correctAnswer
function renderOptions(){
    optionsParent.innerHTML = ""
    for(var i = 0; i < options.length; i++){
        optionsParent.innerHTML +=  `<li  onclick ="setCorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-3'> ${options[i]} </li>`
}
}
window.addOption = function (){
   options.push(option.value)
   console.log(options)
   renderOptions()
}

window.setCorrectAnswer = function(a){
  correctAnswer = a
  correctAnswerElement.innerHTML = correctAnswer
}

window.submitQuestion = function(){
  var obj ={
    question : question.value,
    options : options,
    correctAnswer : correctAnswer
  }
  

  obj.id = push(ref(database,`questions/`)).key

  const reference = ref(database , `questions/${obj.id}`)
  set(reference, obj)
  console.log(obj)
}