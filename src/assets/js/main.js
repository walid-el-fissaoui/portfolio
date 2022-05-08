// START : TOGGLE DARK / LIGHT MODE
function toggleTheme() {
  const themeButton = document.getElementById('toggle-theme-mode')
  const darkTheme = 'dark-theme'
  const iconTheme = 'ri-sun-line'
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.querySelector('i').classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.querySelector('i').classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
  }
  themeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle(darkTheme)
    themeButton.querySelector('i').classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  })
}
toggleTheme()
// END : TOGGLE DARK / LIGHT MODE
// START : OPEN CLOSE MOBILE NAVBAR
function openCloseMobileNav() {
  const menu = document.querySelector("#header .menu"),
    menuToggle = document.querySelector("#header #toggle-mobile-menu");
    menuToggle.addEventListener("click",(e) => {
      e.preventDefault()
      menu.classList.toggle("open");
    })
}
openCloseMobileNav()
// END : OPEN CLOSE MOBILE NAVBAR
// START : TOGGLE HEADER SCROLL SHADOW
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80)
    nav.classList.add('scroll')
  else
    nav.classList.remove('scroll')
}
window.addEventListener('scroll', scrollHeader)
// END : TOGGLE HEADER SCROLL SHADOW
// START : TIMELINE TABS
const tabs = document.querySelectorAll(".tabs [data-target]"),
  tabsContents = document.querySelectorAll(".tabs [data-content]");
  tabs.forEach(tab => {
    tab.addEventListener("click",() => {
      const target = document.querySelector('[data-content=' + tab.dataset.target + ']')
      tabsContents.forEach(item => {
        item.classList.remove("active");
      })
      target.classList.add("active");
      tabs.forEach(item => {
        item.classList.remove("active");
      })
      tab.classList.add("active");
    })
  })
// END : TIMELINE TABS
// START : SKILLS ACCORDION
const skills = document.querySelectorAll(".skills .skills-card"),
  skillsHeaders = document.querySelectorAll(".skills .skills-card .skills-header");
  function toggleSkills() {
    let itemClasses = this.parentNode.className;
    skills.forEach(item => {
      item.classList.remove("open");
    })
    if(!itemClasses.includes("open")) {
      this.parentNode.classList.add("open")
    }
  }
  skillsHeaders.forEach(item => {
    item.addEventListener("click",toggleSkills);
  })
// END : SKILLS ACCORDION