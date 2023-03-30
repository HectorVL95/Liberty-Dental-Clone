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
var usaMap = document.querySelector('.usa-map')
var exploreBtn = document.querySelector('.explorebtn-med-ul')
var medicaidUl = document.querySelector('.med-ul')
var whiteArrowUp = document.querySelector('.whiteArrowUp')
var stateSelect = document.querySelector('.state-select')
var stateGobtn = document.querySelector('.stateGobtn')

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
    };

/* Hovering over user button that will show usertool when in Desktop */
function hoverOverUserBtn(v){
    if(v.matches){
        userButton.addEventListener('mouseover', showUserTools)
            function showUserTools(){
                userTools.classList.remove('inactive')
            };

        userButton.addEventListener('mouseout', hideUsertools)
            function hideUsertools(){
                userTools.classList.add('inactive')
            };

            userTools.addEventListener('mouseover', showUserTools)
            function showUserTools(){
                userTools.classList.remove('inactive')
            };
    }
}

var v = window.matchMedia('(min-width: 900px)')
hoverOverUserBtn(v);


/* clicking on NaVbAr that shows other NavLinkChild */
for (let i = 0; i < navLinkItem.length; i++) {
    navLinkItem[i].addEventListener('click', showNavlinkChild)
    function showNavlinkChild(){
        if(navLinkItem[i]){
            navLinkItemChild[i].classList.toggle('inactive-child')
            userTools.classList.add('inactive')
        }
    }

};

/* NavbarLinkChild will show when mouse goes over nav bar items, this only on desktop */
function hoverNavitem(o){
    for (let i = 0; i < navLinkItem.length; i++) {
        navLinkItem[i].addEventListener('mouseover', showNavlinkChild)
        function showNavlinkChild(){
            if(navLinkItem[i]){
                navLinkItemChild[i].classList.remove('inactive-child')
                userTools.classList.add('inactive')
            }
        }
        navLinkItem[i].addEventListener('mouseout', hideNavlinkChild)
        function hideNavlinkChild(){
            if(navLinkItem[i]){
                navLinkItemChild[i].classList.add('inactive-child')
            }
        }
    
    }
}

var o = window.matchMedia("(min-width: 900px)")
hoverNavitem(o)
o.addListener(hoverNavitem);

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
};



/* Line break for member shine text*/
function lineBreak(p){
    if(p.matches){
        document.querySelector('.shine-text').innerHTML = "Making members shine, <br/> one smile at the time ™"
    }
    else{
        document.querySelector('.shine-text').innerHTML = "Making members shine, one smile at the time ™"
    }
}
var p = window.matchMedia("(min-width:900px)")
lineBreak(p)
p.addListener(lineBreak);


/*toggle Medicaid UL inside purple boxes*/
exploreBtn.addEventListener('mouseover', showMedicaidUl)
function showMedicaidUl(){
    medicaidUl.style.display='block'
}

exploreBtn.addEventListener('mouseout', hideMedicaidUl)
function hideMedicaidUl(){
    medicaidUl.style.display='none'
}

/* Lib National Coverage Select */
stateGobtn.addEventListener('click', takeToState)
function takeToState(){
    var value = stateSelect.value
    if(value == "select-state" )
    {
        window.location.href="https://www.libertydentalplan.com/All-States/About-LIBERTY.aspx"
    }
    else if(value == "california")
    {
        window.location.href="https://www.libertydentalplan.com/LIBERTY-Dental-Plan-of-California/LIBERTY-Dental-Plan-of-California.aspx"
    }
    else if(value == "florida")
    {
        window.location.href="https://www.libertydentalplan.com/Florida/LIBERTY-Dental-Plan-of-Florida.aspx"
    }
    else if(value == "hawaii")
    {
        window.location.href="https://www.libertydentalplan.com/Hawaii/LIBERTY-Dental-Plan-of-Hawaii.aspx"
    }
    else if(value == "illinois")
    {
        window.location.href="https://www.libertydentalplan.com/Illinois/LIBERTY-Dental-Plan-Illinois.aspx"
    }
    else if(value == "missouri")
    {
        window.location.href="https://www.libertydentalplan.com/Missouri/LIBERTY-Dental-Plan-Of-Missouri.aspx"

    }
    else if(value == "nevada")
    {
        window.location.href="https://www.libertydentalplan.com/Nevada/LIBERTY-Dental-Plan-of-Nevada.aspx"
    }
    else if(value == "new jersey")
    {
        window.location.href="https://www.libertydentalplan.com/New-Jersey/LIBERTY-Dental-Plan-of-New-Jersey.aspx"
    }
    else if(value == "new york")
    {
        window.location.href="https://www.libertydentalplan.com/New-York/LIBERTY-Dental-Plan-of-New-York.aspx"
    }
    else if(value == "oklahoma")
    {
        window.location.href="https://www.libertydentalplan.com/Oklahoma/LIBERTY-Dental-Plan-of-Oklahoma.aspx"
    }
    else if(value == "texas")
    {
        window.location.href="https://www.libertydentalplan.com/Texas/LIBERTY-Dental-Plan---Texas.aspx"
    }
};


/* Disapearing map */
function showUsaMap(x){
    if(x.matches){
        usaMap.classList.remove('inactive')
    }
    else{
        usaMap.classList.add('inactive')
    }
}

var x = window.matchMedia("(min-width: 900px)")
showUsaMap(x)
x.addListener(showUsaMap);


/* Show List items in the footer*/
   
for(let i= 0; i < footerUl.length; i++){
    footerUl[i].addEventListener('click', showfooterLi)
    function showfooterLi(){
        if(footerUl[i]){
            footerli[i].classList.toggle('inactive')
        }
    };

    function cancelOutClick(l){
        if(l.matches){
            footerUl[i].removeEventListener('click', showfooterLi)
        }
    }   

    var l = window.matchMedia('(min-width: 900px)')
    cancelOutClick(l)
    l.addListener(cancelOutClick)

};



/* Disappering footer List items */
for(let i =0; i < footerli.length; i++){
    function showfooterLi(e){
        if(e.matches){
            footerli[i].classList.remove('inactive')
        }
        else{
            footerli[i].classList.add('inactive')
        }
    }
    
    var e = window.matchMedia("(min-width: 900px)")
    showfooterLi(e)
    e.addListener(showfooterLi);
}

/* Arrow that takes you up*/
whiteArrowUp.addEventListener('click', goesUp)
function goesUp(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
