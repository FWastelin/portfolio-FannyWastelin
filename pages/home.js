import $ from 'jquery';
import { less } from './less';

export const home = () => {
  const contentHome = `
    <div class="home">
        <article class="apropos">
        <h2><a name="apropos">A propos</a></h2>
        <section>
          <div class="container-txt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cupiditate minima animi quasi laudantium dolorum ab inventore iste fuga repellat aliquid facere corrupti, totam voluptas architecto itaque quo officia nesciunt?</p></div>
          <div class="container-img"><div class="img-portrait"></div></div>
          <div class="container-tache2"><div class="tache2"></div></div>
        </section>
      </article>

      <article class="projet">
        <h2><a name="projet">Projets</a></h2>
        <section class="img-projet">
          <section class="ligne1">
            <div class="projet1"><div class="img-less"><span class="texte">Site "Less is Belge": projet de groupe réalisé à Interface3.</br><div class="d-flex"><a href="#modal-hacka" class="js-modal">modal</a><button class="voir"><a href="https://less-is-belge.netlify.app/">Découvrir</a></button></div></span></div></div>
            <div class="ai"><div class="img-ai"><span class="texte">Carte postale déssinée en Illustrator.</span></div></div>
            <div class="hackaton"><div class="img-haka"><span class="texte">Projet Hackathon 2020 pour promouvoir l'informatique au féminin.</br><div class="d-flex"><a href="#modal-hacka" class="js-modal">modal</a><button class="voir"><a href=" https://logici-elles.if3.dev/">Découvrir</a></button></div></span></div></div>
          </section>
          <section class="ligne2">
            <div class="phaser"><div class="img-pha"><span class="texte">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit excepturi placeat sed molestiae dolorem</span></div></div>
            <div class="dei"><div class="img-dei">
              <span class="texte">Projet de classe réalisé pour "Défense des enfants international Belgique" <button class="voir-dei"><a href="https://www.dei-belgique.be/expo-bridge/">Découvrir</a></button></span></div></div>
            <div class="animate"></div>
          </section>
          <div class="container-tache3"><div class="tache3"></div></div>
        </section>
      </article>
    
      <aside id="modal-hacka" class="modal" style="display:none;">
        <div class="contenu-modal" id="carroussel-hacka">
          <button class="js-modal-close">X</button>
          <ul>
            <li><img src="./images/haka1.png" alt="img1"/></li>
            <li><img src="./images/haka2.png" alt="img2"/></li>
            <li><img src="./images/haka3.png" alt="img3"/></li>
            <li><img src="./images/haka4.png" alt="img4"/></li>
            <li><img src="./images/haka5.png" alt="img5"/></li>
          </ul>
        </div>
      </aside>

      <article class="competence">
        <h2><a name="competence">Compétences</a></h2>
        <section class="sect-competence">
          <div class="technique">
            <h3>Technique</h3>
            <ul>
              <li>Html5/ Css3/ Sass</li>
              <li>UX/UI</li>
              <li>JavaScript/ jQuery</li>
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

  /* modal */
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
  const $carrousselHacka = $('#carroussel-hacka');
  const $imgH = $('#carroussel-hacka img');
  const indexImgH = $imgH.length - 1;
  let i = 0;
  let $currentImgH = $imgH.eq(i); // function eq()=pour cibler

  $imgH.css('display', 'none');// on cache
  $currentImgH.css('display', 'block');// on montre img courante
  $carrousselHacka.append('<div class="controls"><span class="prev">Prec</span><span class="next">suiv</span></div>');
  $('.next').on('click', () => { // image suivante
    i++;
    if (i <= indexImgH) {
      $imgH.css('display', 'none');
      $currentImgH = $imgH.eq(i); // on définit la nouvelle image
      $currentImgH.css('display', 'block'); // puis on l'affiche
    } else {
      i = indexImgH;
    }
  });

  $('.prev').on('click', () => { // image précédente
    i--; // on décrémente le compteur
    if (i >= 0) {
      $imgH.css('display', 'none');
      $currentImgH = $imgH.eq(i);
      $currentImgH.css('display', 'block');
    } else {
      i = 0;
    }
  });
};
