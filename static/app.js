const menuButton = document.getElementById('mobile-menu-button'); // This is your button element
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuButton.querySelector('i'); // This selects the FontAwesome icon inside the button
let menuOpen = false;

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    if (!menuOpen) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        menuOpen = true;
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        menuOpen = false;
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById('progress-bar').style.width = scrolled + "%";
});




