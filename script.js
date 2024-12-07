let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const arrow = new Typed('.multiple-text', {
    strings: ['Teacher', 'Frontend Developer', 'Backend Developer' ,'Web Designer' ,'Blockchain Developer' ,'You Tuber'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });