<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>تسجيل الدخول - يُسر</title>
  <style>
    body {
      font-family: "Tahoma", sans-serif;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      direction: rtl;
    }
    .login-container {
      background-color: white;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 300px;
    }
    h2 {
      text-align: center;
      color: #006400;
    }
    input {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    button {
      width: 100%;
      padding: 10px;
      margin-top: 15px;
      background-color: #006400;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background-color: #008000;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>تسجيل الدخول</h2>
    <form id="login-form">
      <input type="email" id="email" placeholder="البريد الإلكتروني" required />
      <input type="password" id="password" placeholder="كلمة المرور" required />
      <button type="submit">دخول</button>
    </form>
  </div>

  <!-- سكريبتات في النهاية -->
  <script type="module" src="./firebase-config.js"></script>
  <script type="module" src="./login.js"></script>
</body>
</html>
