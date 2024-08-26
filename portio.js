/*============================Toggle Icon Navbar===================*/

let nemuIcon = document.querySelector('#menu-icon');
letnavbar = document.querySelector('.navbar');

mediaIcon.onclick = () => {
    MenuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
/*============================Scroll Setion Action Link===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top => offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');

            });
        };
    });

    /*============================Sticky Navbar===================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    /*============================Remove Toggle Icon and Navbar===================*/
    MenuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
/*============================Scroll Reveal===================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

});
ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1,.about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p,.about-content', {origin: 'right'});
/*============================typed js===================*/
const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Developer','Youtber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,   
});