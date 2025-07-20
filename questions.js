
const questions = [
  {
    question: "قال رسول الله ﷺ: \"من لا يَرحم لا يُرحم\", ما معنى الحديث؟",
    options: ["من لا يصلي لا يُقبل", "من لا يرحم الناس لا يُرحمه الله", "من لا يزور لا يُزار"],
    correctAnswer: 1,
    source: "صحيح البخاري"
  },
  {
    question: "قال رسول الله ﷺ: \"الدال على الخير كفاعله\", ما معنى الحديث؟",
    options: ["من يشير إلى الخير له مثل أجر فاعله", "من يعمل الشر يُعاقب", "من يصمت يُثاب"],
    correctAnswer: 0,
    source: "صحيح مسلم"
  }
];
let currentQuestionIndex = 0;
function showQuestion() {
  const q = questions[currentQuestionIndex];
  document.getElementById("question").textContent = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsContainer.appendChild(btn);
  });
}
function checkAnswer(selected) {
  const feedback = document.getElementById("feedback");
  const correct = questions[currentQuestionIndex].correctAnswer;
  if (selected === correct) {
    feedback.textContent = "✔️ إجابة صحيحة!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ إجابة خاطئة!";
    feedback.style.color = "red";
  }
}
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").textContent = "انتهت الأسئلة.";
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").textContent = "";
  }
}
function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("question-screen").style.display = "block";
      showQuestion();
    })
    .catch(error => alert(error.message));
}
function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("question-screen").style.display = "block";
      showQuestion();
    })
    .catch(error => alert(error.message));
}
