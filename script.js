var threelinesbtn = document.querySelector('.threelines-menu')
var inactive = document.getElementsByClassName('inactive')
var threelinesMenuList = document.querySelector('.threelines-menu-list')
var threelinesMenuListItem = document.querySelector('.threelinesmenu')
var threeLinesmenuInsideItems = document.querySelector('.threelines-menu-items')


threelinesbtn.addEventListener('click', threelinesbtnclick)
function threelinesbtnclick(){
    threelinesMenuList.classList.toggle('inactive')
};

threelinesMenuListItem.addEventListener('click', threelinesMenuListItemclick)
function threelinesMenuListItemclick(){
    threeLinesmenuInsideItems.classList.toggle('inactive')
};