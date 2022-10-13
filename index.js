const navbar = document.querySelector('.navbar')
const upButton = document.querySelector('.up-button')
const navbarUl1 = document.querySelector('.navbar-ul-1')
const navbarUl2 = document.querySelector('.navbar-ul-2')
const navbarUl3 = document.querySelector('.navbar-ul-3')
const navbarUl4 = document.querySelector('.navbar-ul-4')
const navbarUl5 = document.querySelector('.navbar-ul-5')

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add('navbar-change-color')
        upButton.style.visibility = 'visible'
        navbarUl1.style.color = 'white'
        navbarUl2.style.color = 'white'
        navbarUl3.style.color = 'white'
        navbarUl4.style.color = 'white'
        navbarUl5.style.color = 'white'
    } else {
        navbar.classList.remove('navbar-change-color')
        upButton.style.visibility = 'hidden'
        navbarUl1.style.color = '#333'
        navbarUl2.style.color = '#333'
        navbarUl3.style.color = '#333'
        navbarUl4.style.color = '#333'
        navbarUl5.style.color = '#333'
    }
}
