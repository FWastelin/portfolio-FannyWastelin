import $ from 'jquery';
import { less } from './less';

export const home = () => {
  const contentHome = `
    <div class="home">
        <article class="apropos">
        <h2><a name="apropos">A propos</a></h2>
        <section>
          <div class="container-txt"><p>Styliste de formation, je me suis découverte une passion pour le code. Ma formation de « Front-end developer » en poche, je suis prête à relever de nouveaux défis. Mes points forts ? Le souci du travail bien fait, un esprit d’équipe, des compétences techniques, de la créativité et mon intérêt pour le « beau ».</p></div>
          <div class="container-img"><div class="img-portrait"></div></div>
          <div class="container-tache2"><div class="tache2"></div></div>
        </section>
      </article>
      <article class="projet">
        <h2><a name="projet">Projets</a></h2>
        <section class="img-projet">
          <section class="ligne1">
            <div class="projet1"><div class="img-less"><span class="texte">Projet de groupe réalisé à 3 lors de ma formation. Objectif : promouvoir la mode éco-responsable belge.</br>Technologies utilisées : Javascript, HTML, SCSS, Webpack. </br><div class="d-flex"><a href="#modal-lib" class="js-modal">En voir Plus</a><button class="voir"><a href="https://less-is-belge.netlify.app/">Découvrir</a></button></div></span></div></div>
            <div class="ai"><div class="img-ai"><span class="texte">Carte postale dessinée avec Illustrator.</span></div></div>
            <div class="hackaton"><div class="img-haka"><span class="texte">Projet réalisé lors du Hackathon 2020 de mon centre de formation. Objectif : promouvoir l’informatique au féminin.</br>Technologies utilisées : Javascript, HTML, SCSS, Parcel.</br><div class="d-flex"><a href="#modal-hacka" class="js-modal">En voir plus</a><button class="voir"><a href=" https://logici-elles.if3.dev/">Découvrir</a></button></div></span></div></div>
          </section>
          <section class="ligne2">
            <div class="phaser"><div class="img-pha"><span class="texte">R-Types games réalisés durant ma formation à Interface3 (2 jours).</br>Technologie utilisée :Phaser</span></div></div>
            <div class="dei"><div class="img-dei">
              <span class="texte">Site web créé avec l’ensemble de la classe. Client : « Défense des enfants International (DEI) Belgique. Technologies utilisées : React, HTML, SCSS.</br><button class="voir-dei"><a href="https://www.dei-belgique.be/expo-bridge/">Découvrir</a></button></span></div></div>
            <div class="animate"></div>
          </section>
          <div class="container-tache3"><div class="tache3"></div></div>
        </section>
      </article>
      <aside id="modal-lib" class="modal" style="display:none;">
        <div class="slideshow-container-lib contenu-modal" id="carroussel-lib">
          <button class="js-modal-close">X</button>
          <ul>
            <li class="mySlides-lib"><img src="./images/lib2.png" alt="img1"/></li>
            <li class="mySlides-lib"><img src="./images/lib1.png" alt="img2"/></li>
            <li class="mySlides-lib"><img src="./images/lessIsBelge3.jpg" alt="img3"/></li>
            <li class="mySlides-lib"><img src="./images/lessIsBelge4.jpg" alt="img4"/></li>
            <li class="mySlides-lib"><img src="./images/lessIsBelge5.png" alt="img5"/></li>
            <li class="mySlides-lib"><img src="./images/lessIsBelge6.png" alt="img6"/></li>
          </ul>
        </div>
      </aside>
      <aside id="modal-hacka" class="modal" style="display:none;">
        <div class="slideshow-container-haka contenu-modal" id="carroussel-hacka">
          <button class="js-modal-close">X</button>
          <ul>
            <li class="mySlides-hacka"><img src="./images/haka1.png" alt="img1"/></li>
            <li class="mySlides-hacka"><img src="./images/haka2.png" alt="img2"/></li>
            <li class="mySlides-hacka"><img src="./images/haka3.png" alt="img3"/></li>
            <li class="mySlides-hacka"><img src="./images/haka4.png" alt="img4"/></li>
            <li class="mySlides-hacka"><img src="./images/haka5.png" alt="img5"/></li>
          </ul>
        </div>
      </aside>

      <article class="competence">
        <h2><a name="competence">Compétences</a></h2>
        <section class="sect-competence">
          <div class="technique">
            <h3>Techniques</h3>
            <ul>
              <li>Html5/ Css3/ Sass</li>
              <li>JavaScript/ jQuery/ React</li>
              <li>Git/ Github</li>
              <li>PHP/ MySql</li>
              <li>Node.js/noSql</li>
              <li>Phaser</li>
              <li>Bootstrap</li>
              <li>Wordpress</li>
            </ul>
            <div class="container-tache4"><div class="tache4"></div></div>
          </div>
          <div class="design">
            <h3>Design</h3>
            <ul>
              <li>Photoshop</li>
              <li>Illustator</li>
              <li>XD</li>
              <li>Animate</li>
          </div>
        </section>
      </article>
    </div>
    `;
  document.querySelector('main').innerHTML = contentHome;
  $('.voir-less').on('click', () => less());

  /* modal-haka */
  let modal = null;
  const stopPropagation = function (e) {
    e.stopPropagation();
  };
  const closeModal = function (e) {
    e.preventDefault();
    modal.style.display = 'none';
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').removeEventListener('click', stopPropagation);
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal);
    modal = null;
  };
  const openModal = function (e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.style.display = null;
    modal = target;
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-modal-close').addEventListener('click', stopPropagation);
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal);

    console.log(modal);
  };
  document.querySelectorAll('.js-modal').forEach((a) => {
    a.addEventListener('click', openModal);
  });
  /* carroussel */
  let slideIndex = 0;
  function showSlides() {
    let i;
    const slides = document.getElementsByClassName('mySlides-hacka');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000);
  }
  showSlides();
  function showSlidesL() {
    let i;
    const slides = document.getElementsByClassName('mySlides-lib');
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlidesL, 2000);
  }
  showSlidesL();
};
