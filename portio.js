/*============================Toggle Icon Navbar===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*============================Scroll Section Active Link===================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*============================Sticky Navbar===================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================Remove Toggle Icon and Navbar===================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*============================Scroll Reveal===================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .honeycomb-container, .portfolio-box, .cert-card, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*============================Typed js===================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Tech Enthusiast'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,   
});

/*============================ Certificate Modal ===================*/
function openModal(filepath) {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('modalContent');
    
    // Clear previous content
    modalContent.innerHTML = '';
    
    // Check if it's a PDF or an Image
    if (filepath.toLowerCase().endsWith('.pdf')) {
        modalContent.innerHTML = `<iframe src="${filepath}" width="800" height="600" style="border:none;"></iframe>`;
    } else {
        modalContent.innerHTML = `<img src="${filepath}" alt="Certificate">`;
    }
    
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('certModal');
    modal.style.display = 'none';
    document.getElementById('modalContent').innerHTML = ''; // clear it to stop video/pdf if needed
}

// Close modal if clicked outside of content
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeModal();
    }
}

/*============================ EmailJS Setup ===================*/
// Initialize EmailJS (Replace with your actual Public Key from emailjs.com)
emailjs.init("akJj2qfAe_sOd4leM");

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default page refresh

    // Change button text to show it's sending
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.value;
    submitBtn.value = 'Sending...';

    // Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID with actual IDs from emailjs.com
    emailjs.sendForm('udayavazral', 'template_8l7ebdn', this)
        .then(function() {
            alert('Message Sent Successfully!');
            submitBtn.value = originalText;
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            submitBtn.value = originalText;
        });
});