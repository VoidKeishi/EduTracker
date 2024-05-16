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

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  let confirm = document.getElementById('confirm').value
  let position = document.getElementById('position').value
  let workplace = document.getElementById('workplace').value

  if (password == confirm) {
    const user = {
      email,
      password,
      position,
      workplace
    }
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '../login/login.html'
  } else {
    alert('Mật khẩu không khớp')
  }
})
