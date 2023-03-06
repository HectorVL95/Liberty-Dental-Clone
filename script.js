var threeLinesBtn = document.querySelector('.threelines-menu');
var navBarMenu = document.querySelector('nav-bar-menu');
var inactive = document.querySelector('.inactive');
var navLinkItem = document.querySelector('.nav-link-item');
var inactiveChild = document.querySelector('.inactive-child');

threeLinesBtn.addEventListener('click', toggleNavBarMenu )
function toggleNavBarMenu(){
    navBarMenu.classList.toggle('inactive')
}
