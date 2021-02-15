import $ from 'jquery';
import { home } from './home';

export const less = () => {
  const contentLess = `
  <div class="less">
    <article class="less">
            <h2>Less is Belge</h2>
            <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
             veniam minus. Voluptatibus architecto animi ad, voluptatum natus
            accusantium, ipsum esse cumque temporibus in nesciunt reprehenderit
            officia recusandae sit, repellendus voluptatem!
            </p>
            <section class="img-less">
                <section class="ligne1">
                    <div class="contLess1"><div class="imgLess1"></div></div>
                    <div class="contLess2"><div class="imgLess2"></div></div>
                    <div class="contLess3"><div class="imgLess3"></div></div>
                </section>
                <section class="ligne2">
                    <div class="contLess4"><div class="imgLess4"></div></div>
                    <div class="contLess5"><div class="imgLess5"></div></div>
                    <div class="contLess6"><div class="imgLess6"></div></div>
                </section>
                <div class="container-tache3"><div class="tache3"></div></div>
            </section>
            <button class=".voir-home">retour</button>
    </article>
  </div>
      `;
  document.querySelector('main').innerHTML = contentLess;
  $('.voir-home').on('click', () => home());
};
