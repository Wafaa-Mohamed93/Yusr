
function register() {
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;
  const bank = document.getElementById('bank').value;
  localStorage.setItem('name', name);
  localStorage.setItem('points', '0');
  alert("تم التسجيل بنجاح!");
  window.location.href = 'main.html';
}

function loadProfile() {
  document.getElementById('displayName').textContent = localStorage.getItem('name') || '';
  document.getElementById('displayPoints').textContent = localStorage.getItem('points') || '0';
}

function convertPoints() {
  const points = parseInt(localStorage.getItem('points') || '0');
  const money = (points / 100) * 10;
  document.getElementById('convertedResult').textContent = "المبلغ المحول: " + money.toFixed(2) + " جنيه";
}

function generateCode() {
  const code = "YSR-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById('withdrawCode').textContent = "رمز السحب: " + code;
}

const questions = [
  {
    question: "قال رسول الله ﷺ: \"الدال على الخير كفاعله\"",
    options: [
      "من دلّ على عمل خير كأنه فعله",
      "من أمر بالشر يُؤجر",
      "من سمع خيرًا فهو مسؤول",
      "من نوى الخير كأنه عمله"
    ],
    answer: "من دلّ على عمل خير كأنه فعله",
    source: "رواه الترمذي",
    correctFeedback: "✔ أحسنت! هذا هو معنى الحديث.",
    incorrectFeedback: "✘ خطأ، المعنى الصحيح: من دلّ على عمل خير كأنه فعله."
  },
  {
    question: "قال رسول الله ﷺ: \"الراحمون يرحمهم الرحمن\"",
    options: [
      "من يرحم الناس لا يُحاسب",
      "من يرحم يُرزق مالاً",
      "من يرحم يُرحمه الله",
      "من يرحم يدخل الجنة بلا حساب"
    ],
    answer: "من يرحم يُرحمه الله",
    source: "رواه الترمذي",
    correctFeedback: "✔ صحيح! الله يرحم من يرحم خلقه.",
    incorrectFeedback: "✘ خطأ، الإجابة: من يرحم يُرحمه الله."
  },
  {
    question: "قال رسول الله ﷺ: \"تبسمك في وجه أخيك صدقة\"",
    options: [
      "الضحك الكثير يزيل الهم",
      "التبسم للمؤمن عبادة",
      "الابتسامة لا تُحسب من الصدقات",
      "الصدقة فقط بالمال"
    ],
    answer: "التبسم للمؤمن عبادة",
    source: "رواه الترمذي",
    correctFeedback: "✔ رائع! الابتسامة صدقة.",
    incorrectFeedback: "✘ خطأ، الصحيح: التبسم للمؤمن عبادة."
  },
  {
    question: "قال رسول الله ﷺ: \"من لا يشكر الناس لا يشكر الله\"",
    options: [
      "الشكر لا يُقال للناس",
      "الله لا يرضى عن من لا يشكر الناس",
      "من لم يعترف بفضل الناس لا يعرف الشكر",
      "الشكر ليس من الإيمان"
    ],
    answer: "من لم يعترف بفضل الناس لا يعرف الشكر",
    source: "رواه أبو داود",
    correctFeedback: "✔ ممتاز! الشكر للناس من شكر الله.",
    incorrectFeedback: "✘ خطأ، الصحيح: من لم يعترف بفضل الناس لا يعرف الشكر."
  },
  // ... أضف المزيد بنفس الصيغة حتى تصل إلى 20
];


let current = 0;
let score = parseInt(localStorage.getItem("points")) || 0;

function loadQuestion() {
  if (!document.getElementById("question")) return;
  if (current >= questions.length) {
    localStorage.setItem("points", score);
    alert("انتهت الأسئلة!");
    window.location.href = "main.html";
    return;
  }
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.correct) score += 10;
      current++;
      loadQuestion();
    };
    choicesDiv.appendChild(btn);
  });
  document.getElementById("score").textContent = score;
}

window.onload = () => {
  loadProfile();
  loadQuestion();
}
