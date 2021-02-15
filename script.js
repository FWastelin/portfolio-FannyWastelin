import './styles.scss';
import { home } from './pages/home';

// import $ from 'jquery';
// import 'bootstrap';
// $('body').append('jquery + bootstrap works!');

home();

// animation curseur/mousemove=suit le mouvement de la souris
const cursor = document.querySelector('.animCursor');

document.addEventListener('mousemove', (e) => {
  cursor.setAttribute('style', `top:${e.pageY}px; left:${e.pageX}px;`);
});
// rajoute la class expand/ mouseover=quand la souris passe au-dessus
document.addEventListener('mouseover', () => {
  cursor.classList.add('expand');
  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});
