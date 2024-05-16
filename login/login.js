document.getElementById('toggle-password').addEventListener('click', (e) => {
  let passwordInput = document.getElementById('password')
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }
})

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let user = JSON.parse(localStorage.getItem('user'))

  if (email == user.email && password == user.password) {
    alert('Đăng nhập thành công')
    // window.location.href = '../login/login.html'
  } else {
    alert('Email hoặc mật khẩu sai')
  }
})
