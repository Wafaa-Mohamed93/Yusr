<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>تسجيل الدخول - يُسر</title>
  <link rel="stylesheet" href="style.css" />
  <script defer src="firebase-config.js"></script>
  <script defer src="auth.js"></script>
</head>
<body>
  <div class="container">
    <h2>تسجيل الدخول إلى يُسر</h2>
    <input type="email" id="email" placeholder="البريد الإلكتروني" />
    <input type="password" id="password" placeholder="كلمة المرور" />
    <button onclick="login()">تسجيل الدخول</button>
    <p id="login-error" class="error"></p>
  </div>
</body>
</html>
