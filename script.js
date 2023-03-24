var threelinesbtn = document.querySelector('.threelines-menu')
var inactive = document.querySelector('.inactive')
var navBarMenu = document.querySelector('.nav-bar-menu')
var navLinkItem = document.querySelectorAll('.nav-link-item')
var navLinkItemChild = document.querySelectorAll('.nav-link-itemChild')
var inactiveChild = document.querySelectorAll('.inactive-child')
var userButton = document.querySelector('.user-button')
var userTools = document.querySelector('.user-tools')
var footerUl = document.querySelectorAll('.footer-ul')
var footerli = document.querySelectorAll('.footer-li')

/*Clicking threelines button */
threelinesbtn.addEventListener('click', threelinesbtnclick)
function threelinesbtnclick(){
    navBarMenu.classList.toggle('inactive')
    userTools.classList.add('inactive')
};

/* Change inactive class for Navbar */
function showNavbar(x){
    if(x.matches){
        navBarMenu.classList.remove('inactive')
    }
    else{
        navBarMenu.classList.add('inactive')
    }
}

var x = window.matchMedia("(min-width: 900px)")
showNavbar(x)
x.addListener(showNavbar);


/*Clicking user button */
userButton.addEventListener('click', showUserTools)
    function showUserTools(){
        userTools.classList.toggle('inactive')
    }


for (let i = 0; i < navLinkItem.length; i++) {
    navLinkItem[i].addEventListener('click', showNavlinkChild)
    function showNavlinkChild(){
        if(navLinkItem[i]){
            navLinkItemChild[i].classList.toggle('inactive-child')
            userTools.classList.add('inactive')
        }
    }

};


/* Moving pictures on "Making members shine" */
const images = ["./assets/family.jpg", "./assets/guywithGirl.jpg", "./assets/otherpic.jpg" ]
const shine = document.querySelector('.shine');
const interval = setInterval(function(){
    startCarousel();
}, 3000);
var index = 1;

startCarousel = () => {
    shine.style.backgroundImage = `url(${images[index++]})`;
    shine.classList.remove('fade');
    void shine.offsetWidth;
    shine.classList.add('fade');
    if(index > images.length - 1) index = 0;
}
   
for(let i= 0; i < footerUl.length; i++){
    footerUl[i].addEventListener('click', showfooterLi)
    function showfooterLi(){
        if(footerUl[i]){
            footerli[i].classList.toggle('inactive')
        }
    }
}
