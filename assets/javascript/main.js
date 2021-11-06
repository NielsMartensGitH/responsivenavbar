const navLinks = document.getElementById('nav-links');
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');

if(toggle) {
    toggle.addEventListener('click', () => {
        navLinks.classList.add('show-menu')
    })
}

if(close) {
    close.addEventListener('click', () => {
        navLinks.classList.remove('show-menu')
    })
}