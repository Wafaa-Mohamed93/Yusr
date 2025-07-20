<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>تسجيل الدخول - يُسر</title>
</head>
<body style="font-family: Arial; background-color: #000; color: #fff; text-align: center; padding-top: 100px;">

  <h2>تسجيل الدخول إلى يُسر</h2>

  <form id="login-form">
    <input type="email" id="email" placeholder="البريد الإلكتروني" required /><br /><br />
    <input type="password" id="password" placeholder="كلمة المرور" required /><br /><br />
    <button type="submit">دخول</button>
  </form>

  <p id="error-msg" style="color: red; margin-top: 10px;"></p>

  <!-- Firebase CDN -->
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>

  <!-- ملفات المشروع -->
  <script src="firebase-config.js"></script>
  <script src="auth.js"></script>

</body>
</html>
