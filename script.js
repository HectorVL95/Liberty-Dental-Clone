var threelinesbtn = document.querySelector('.threelines-menu')
var inactive = document.querySelector('.inactive')
var navBarMenu = document.querySelector('.nav-bar-menu')
var navLinkItem = document.querySelectorAll('.nav-link-item')
var navLinkItemArray = Array.from(navLinkItem)
var navLinkItemChild = document.querySelectorAll('.nav-link-itemChild')
var inactiveChild = document.querySelectorAll('.inactive-child')


threelinesbtn.addEventListener('click', threelinesbtnclick)
function threelinesbtnclick(){
    navBarMenu.classList.toggle('inactive')
};

/*navLinkItem[0].addEventListener('click', navLinkItemClick)
function navLinkItemClick(){
    navLinkItemChild[0].classList.toggle('inactive-child')
}

navLinkItem[1].addEventListener('click', navLinkItemClick)
function navLinkItemClick(){
    navLinkItemChild[1].classList.toggle('inactive-child')
}*/

navLinkItem.forEach.addEventListener('click', navLinkItemClick)
    function navLinkItemClick(){
        navLinkItemChild.forEach.toggle(inactiveChild.forEach)
    };