let currentIndex = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentIndex];
  const questionText = document.getElementById("question-text");
  const choicesDiv = document.getElementById("choices");
  const resultDiv = document.getElementById("result");

  questionText.textContent = q.question;
  choicesDiv.innerHTML = "";
  resultDiv.textContent = "";

  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.answer) {
        resultDiv.innerHTML = "✅ إجابة صحيحة<br><small>" + q.source + "</small>";
        score++;
      } else {
        resultDiv.innerHTML = "❌ إجابة خاطئة<br><small>الصحيح: " + q.answer + "<br>" + q.source + "</small>";
      }
    };
    choicesDiv.appendChild(btn);
  });
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question-text").textContent = "انتهت الأسئلة!";
    document.getElementById("choices").innerHTML = "";
    document.getElementById("result").textContent = "نتيجتك: " + score + " من " + questions.length;
  }
});

window.onload = showQuestion;
