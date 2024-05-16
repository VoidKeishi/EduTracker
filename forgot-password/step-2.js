document.getElementById('toggle-password').addEventListener('click', (e) => {
  let passwordInput = document.getElementById('password')
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }
})
document.getElementById('toggle-confirm').addEventListener('click', (e) => {
  let passwordInput = document.getElementById('confirm')
  console.log(passwordInput)
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text'
  } else {
    passwordInput.type = 'password'
  }
})

document.getElementById('step2-form').addEventListener('submit', (e) => {
  e.preventDefault()
  let password = document.getElementById('password').value
  let confirm = document.getElementById('confirm').value
  let user = JSON.parse(localStorage.getItem('user'))

  if (password === confirm) {
    user = {
      ...user,
      password
    }
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '../login/login.html'
  } else {
    alert('Mật khẩu không khớp')
  }
})
