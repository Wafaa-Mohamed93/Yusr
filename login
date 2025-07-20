import { auth, signInWithEmailAndPassword } from './firebase-config.js';

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("تم تسجيل الدخول بنجاح");
      window.location.href = "main.html"; // توجه المستخدم للصفحة الرئيسية بعد الدخول
    })
    .catch((error) => {
      alert("خطأ في تسجيل الدخول: " + error.message);
    });
});
