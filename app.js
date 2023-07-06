  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getDatabase, ref , onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
  const database = getDatabase();

  var loader = document.getElementById('loader')
  var showQuestion = document.getElementById('showQuestion')


  function getDataFromDatabase(){
    loader.style.display = 'block'
    showQuestion.style.display = 'none'

    const  reference = ref(database , 'questions/')
    onChildAdded(reference,function(data){
      console.log(data.val())
      questions.push(data.val())
      loader.style.display = 'none'
    showQuestion.style.display = 'block'
      renderQuestion();
    })
    }
    
    getDataFromDatabase()
  
  
  var questions = [];
  
  var currentQuestion = document.getElementById('currentQuestion');
  var totalQuestion = document.getElementById('totalQuestion');
  var questionElement = document.getElementById('question');
  var answerParent = document.getElementById('answerParent');
  
  var indexNum = 0;
  var score = 0;

  window. checkQuestion= function(a, b) {
    if (a === b) {
      score++;
      console.log(score);
    }
    nextQuestion();
  }
  window. nextQuestion = function() {
    
    if (indexNum+1 == questions.length) {
      alert("Your score is " + score);
      
    } else {
      indexNum++;
      renderQuestion();
     }
  }

  function renderQuestion() {
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;
    var obj = questions[indexNum];
    questionElement.innerHTML = obj.question;
    answerParent.innerHTML = "";
  
    for (var i = 0; i < obj.options.length; i++) {
      answerParent.innerHTML += `
        <div class="col-md-4">
          <div class="py-2">
            <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAns}')" class="btn btn-primary fs-3 rounded w-100">
              ${obj.options[i]}
            </button>
          </div>
        </div>`;
    }
  }
  
  
  
  
  
 
  