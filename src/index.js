import './css/css.css';
import './sass/sass.sass';
import './sass/media.sass';

const menu = document.body.querySelector('.menu')

document.body.querySelector('.menu-btn').addEventListener('click',() => {
  menu.classList.add('menu_open')  
})
document.body.querySelector('.menu__control').addEventListener('click',() => {
  menu.classList.remove('menu_open')
})