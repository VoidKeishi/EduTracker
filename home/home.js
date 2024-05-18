const anchorEl = document.body.querySelector('#profile-icon');
const menuEl = document.body.querySelector('#usage-menu');

anchorEl.addEventListener('click', () => { 
  menuEl.open = !menuEl.open;
});

const hamburgerIcon = document.body.querySelector('#hamburger-icon');
const sidebar = document.body.querySelector('#sidebar');
const contentWrapper = document.getElementById('content-wrapper');
const content = document.getElementById('content')

hamburgerIcon.addEventListener('click', () => {
  if (sidebar.classList.contains('hide-sidebar')) {
    sidebar.classList.remove('hide-sidebar');
    contentWrapper.style.minWidth = "82vw";
    content.style.padding = '0 4rem';
  } else {
    sidebar.classList.add('hide-sidebar');
    contentWrapper.style.minWidth = "100vw";
    content.style.padding = '0 16rem';
  }
})

const sidebarItems = {
  'Công việc đã đăng ký': 'signed-task',
  'Lịch sử KPI': 'kpi-history',
  'Bảng tin': 'news'
}
const keyArr = Object.keys(sidebarItems)

const sidebarOptionTitle = document.body.querySelectorAll('.sidebar-options .sidebar-option')

sidebarOptionTitle.forEach((option) => {
  option.addEventListener('click', (event) => {
    const title = option.querySelector('.sidebar-option-title')
    const text = title.innerText
    if (keyArr.includes(text)) {
      const element = document.getElementById(sidebarItems[text])
      element.scrollIntoView()
    }
  })
})