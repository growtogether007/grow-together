burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
rightnav = document.querySelector('.rightnav')
 


burger.addEventListener('click', ()=>{
    rightnav.Classlist.toggle('v-class-resp');
    navlist.Classlist.toggle('v-class-resp');
    navbar.Classlist.toggle('h-nav-resp');

})