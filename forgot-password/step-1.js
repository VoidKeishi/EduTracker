document.getElementById('step1-form').addEventListener('submit', (e) => {
  e.preventDefault()
  let email = document.getElementById('email').value
  let user = JSON.parse(localStorage.getItem('user'))
  if (email === user.email) {
    window.location.href = './step-2.html'
  } else {
    alert('Không tìm thấy email')
  }
})
