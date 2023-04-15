const navbar = document.querySelector('.navbar-content');
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
}
const garis = document.querySelector('#menu');
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});