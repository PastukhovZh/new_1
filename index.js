const easternEurope = document.querySelector('#easternEurope');
const westernEurope = document.querySelector('#western-europe');
const asia = document.querySelector('#asia');
const nearEast = document.querySelector('#near-east');
const africa = document.querySelector('#africa');
// const touchBarNav = document.querySelector('.region-nav')

const regionList = document.querySelector('.region-wrap');

const renderEasternEurope = `<ul class="region-image__list">
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/czech-republic.jpg"
                alt="czech-republic"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Czech Republic</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/estonia.jpg"
                alt="estonia"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Estonia</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/latvia.jpg"
                alt="latvia"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Latvia</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/lithuania.jpg"
                alt="lithuania"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Lithuania</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/moldova.jpg"
                alt="moldova"
                class="region-image"
              />
              <div class="region-overlay">
                <a
                  href="https://www.google.com/maps/place/Strada+Columna+171,+Chișinău,+Молдавия/@47.0362691,28.8208407,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97db9c5557641:0x87ccdad7f6c5bab8!8m2!3d47.0362691!4d28.8208407"
                  class="region-overlay__info"
                >
                  Str. Columna 171, Chisinau, Moldova, 2004
                </a>
              </div>
            </div>
            <p class="region-image__text">Moldova</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/poland.jpg"
                alt="poland"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Poland</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/eastern-europe/romania.jpg"
                alt="romania"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Bucureşti, Bd. Unirii, nr. 22, sector 3, 030833
                </a>
              </div>
            </div>
            <p class="region-image__text">Romania</p>
          </li>
        </ul>`;
const renderWesternEurope = `<ul class="region-image__list">
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/cyprus.jpg"
                alt="cyprus"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Cyprus</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/denmark.jpg"
                alt="denmark"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Denmark</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/england.jpg"
                alt="england"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">England</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/finland.jpg"
                alt="finland"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Finland</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/france.jpg"
                alt="france"
                class="region-image"
              />
              <div class="region-overlay">
                <a
                  href="https://www.google.com/maps/place/Strada+Columna+171,+Chișinău,+Молдавия/@47.0362691,28.8208407,17z/data=!3m1!4b1!4m5!3m4!1s0x40c97db9c5557641:0x87ccdad7f6c5bab8!8m2!3d47.0362691!4d28.8208407"
                  class="region-overlay__info"
                >
                  Str. Columna 171, Chisinau, Moldova, 2004
                </a>
              </div>
            </div>
            <p class="region-image__text">France</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/germany.jpg"
                alt="germany"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Germany</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/italy.jpg"
                alt="italy"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Bucureşti, Bd. Unirii, nr. 22, sector 3, 030833
                </a>
              </div>
            </div>
            <p class="region-image__text">Italy</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/norway.jpg"
                alt="norway"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Bucureşti, Bd. Unirii, nr. 22, sector 3, 030833
                </a>
              </div>
            </div>
            <p class="region-image__text">Norway</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/western-europe/sweden.jpg"
                alt="sweden"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Bucureşti, Bd. Unirii, nr. 22, sector 3, 030833
                </a>
              </div>
            </div>
            <p class="region-image__text">Sweden</p>
          </li>
        </ul>`;
const renderAsia = `<ul class="region-image__list">
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/asia/japan.jpg"
                alt="japan"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Japan</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/asia/singapore.jpg"
                alt="singapore"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Singapore</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/asia/uzbekistan.jpg"
                alt="uzbekistan"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Uzbekistan</p>
          </li>
        </ul>`;
const renderNearEast = `<ul class="region-image__list">
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/near-east/israel.jpg"
                alt="israel"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Israel</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/near-east/jordan.jpg"
                alt="jordan"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Jordan</p>
          </li>
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/near-east/turkey.jpg"
                alt="turkey"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Turkey</p>
          </li>
        </ul>`;
const renderAfrica =`<ul class="region-image__list">
          <li class="region-image__item">
            <div class="region-overlay__hidden">
              <img
                src="./image/region-image/africa/morocco.jpg"
                alt="morocco"
                class="region-image"
              />
              <div class="region-overlay">
                <a href="" class="region-overlay__info">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Temporibus nostrum quia pariatur. Accusamus, ratione dolore.
                </a>
              </div>
            </div>
            <p class="region-image__text">Morocco</p>
        </ul>`;
  
  
easternEurope.addEventListener('click', renderMapInEasternEurope);
westernEurope.addEventListener('click', renderMapInWesternEurope);
asia.addEventListener('click', renderMapInAsia);
nearEast.addEventListener('click', renderMapInNearEast);
africa.addEventListener('click', renderMapInAfrica);

function renderMapInEasternEurope() {
  easternEurope.classList.add('visited');
  if (renderEasternEurope) {
    westernEurope.classList.remove('visited');
    asia.classList.remove('visited');
    nearEast.classList.remove('visited');
    africa.classList.remove('visited');
    regionList.innerHTML = '';
    regionList.insertAdjacentHTML('beforeend', renderEasternEurope);
    return
  }
}
function renderMapInWesternEurope() {
  westernEurope.classList.add('visited');
  if (renderWesternEurope) {
    easternEurope.classList.remove('visited');
    asia.classList.remove('visited');
    nearEast.classList.remove('visited');
    africa.classList.remove('visited');
    regionList.innerHTML = '';
    regionList.insertAdjacentHTML('beforeend', renderWesternEurope);
    return
  }
}
function renderMapInAsia() {
    asia.classList.add('visited');
  if (renderAsia) {
    easternEurope.classList.remove('visited');
    westernEurope.classList.remove('visited');
    nearEast.classList.remove('visited');
    africa.classList.remove('visited');
    regionList.innerHTML = '';
    regionList.insertAdjacentHTML('beforeend', renderAsia);
    return
  }
}
function renderMapInNearEast() {
  nearEast.classList.add('visited');
  if (renderNearEast) {
        easternEurope.classList.remove('visited');
    westernEurope.classList.remove('visited');
    asia.classList.remove('visited');
    africa.classList.remove('visited');
    regionList.innerHTML = '';
    regionList.insertAdjacentHTML('beforeend', renderNearEast);
    return
  }
}
function renderMapInAfrica() {
  africa.classList.add('visited');
  if (renderAfrica) {
    easternEurope.classList.remove('visited');
    westernEurope.classList.remove('visited');
    asia.classList.remove('visited');
    nearEast.classList.remove('visited');
    regionList.innerHTML = '';
    regionList.insertAdjacentHTML('beforeend', renderAfrica);
    return
  }
}

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////// P R O J E C T S //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////////F I R S T //// P A G E //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


const firstPageFirstProject = `<div class="project-fp-titles-wrap">
        <h2 class="projects-fp-title">Our projects</h2>
        <p class="projects-fp-subtitle">UKRAINIAN BOOKSHELF</p>
      </div>
      <img
        src="./image/projects/page-1/img-project-fp-1.jpg"
        alt="In library"
        class="projects-fp-img"
      />
      <div class="fp-slider">
        <span class="slider-item active"></span>
        <span class="slider-item"></span>
        <span class="slider-item"></span>
        <span class="slider-item"></span>
      </div>
      <div class="projects-fp-info-wrap">
        <p class="projects-fp-info">
          One by one, "Ukrainian bookshelves" are being opened in the libraries
          of Europe. This project was planned even before the beginning of the
          full-scale Russian invasion of Ukraine and provided for the
          distribution of Ukrainian literature in the original and translations
          in the world's leading libraries.
        </p>
      </div>`;

const firstPageSecondProject = `<div class="project-fp-titles-wrap">
        <h2 class="projects-fp-title">Our projects</h2>
      </div>
      <img
        src="./image/projects/page-1/img-project-fp-2.jpg"
        alt="Kyiv street art"
        class="projects-fp-img"
      />
      <div class="fp-slider">
        <span class="slider-item"></span>
        <span class="slider-item active"></span>
        <span class="slider-item"></span>
        <span class="slider-item"></span>
      </div>
      <div class="projects-fp-info-wrap">
        <p class="projects-fp-info">
          The project, initiated by the First Lady of Ukraine Olena Zelenska
          together with the Ministry of Foreign Affairs of Ukraine, the Ministry
          of Culture and Information Policy of Ukraine, as well as the Ukrainian
          Book Institute together with Ukrainian embassies abroad, has already
          been supported in 10 countries.
        </p>
      </div>`;

const firstPageThirdProject = `<div class="project-fp-titles-wrap">
        <h2 class="projects-fp-title">Our projects</h2>
      </div>
      <img
        src="./image/projects/page-1/img-project-fp-3.jpg"
        alt="books"
        class="projects-fp-img"
      />
      <div class="fp-slider">
        <span class="slider-item"></span>
        <span class="slider-item"></span>
        <span class="slider-item active"></span>
        <span class="slider-item"></span>
      </div>
      <div class="projects-fp-info-wrap">
        <p class="projects-fp-info">
          The first "Ukrainian bookshelves" appeared in Austria, Latvia, the
          Netherlands and France. Most recently, the project was launched in
          Estonia, Lithuania, Slovakia, Turkey and Sweden, and already existing
          shelves were filled in the Czech Republic. The shelves will soon
          appear in the network of city libraries in Vienna.
        </p>
      </div>`;

const firstPageFourthProject = `<div class="project-fp-titles-wrap">
        <h2 class="projects-fp-title">Our projects</h2>
      </div>
      <img
        src="./image/projects/page-1/img-project-fp-4.jpg"
        alt="library"
        class="projects-fp-img"
      />
      <div class="fp-slider">
        <span class="slider-item"></span>
        <span class="slider-item"></span>
        <span class="slider-item"></span>
        <span class="slider-item active"></span>
      </div>
      <div class="projects-fp-info-wrap">
        <p class="projects-fp-info">
          Recently "Ukrainian Bookshelf" opened in France, Austria, Latvia and
          the Netherlands. The Paris Pompidou Center has been replenished with
          about 40 books in English and French about the culture, nature and art
          of our country. In the National Library of Austria, visitors can
          familiarize themselves with the works of Taras Shevchenko,
        </p>
      </div>`

const renderProjectsOfFP = document.querySelector('.render-fp-wrap')
const btnRightFP = document.querySelector("[data-button-right-fp");
const btnLeftFP = document.querySelector("[data-button-left-fp");

btnRightFP.addEventListener('click', renderNextPageProjectsFP);
btnLeftFP.addEventListener('click', renderPreviousPageProjectsFP);

btnLeftFP.classList.add('visually-hidden')

function renderNextPageProjectsFP() {

  if (renderProjectsOfFP.classList.contains('first-project')) {
    renderProjectsOfFP.classList.remove('first-project');
    renderProjectsOfFP.classList.add('second-project');
    btnLeftFP.classList.remove('visually-hidden');

    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageSecondProject);
    return
    }
  else if (renderProjectsOfFP.classList.contains('second-project')) {
        renderProjectsOfFP.classList.remove('second-project');
    renderProjectsOfFP.classList.add('third-project');
    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageThirdProject);
    return
  }
  else if (renderProjectsOfFP.classList.contains('third-project')) {
    btnRightFP.classList.add('visually-hidden')
    renderProjectsOfFP.classList.remove('third-project');
    renderProjectsOfFP.classList.add('fourth-project');
    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageFourthProject);
    return
  }
  return
}

function renderPreviousPageProjectsFP() {
  if (renderProjectsOfFP.classList.contains('fourth-project')) {
    btnRightFP.classList.remove('visually-hidden');
    renderProjectsOfFP.classList.add('third-project');
    renderProjectsOfFP.classList.remove('fourth-project');
    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageThirdProject);
    return
  } else if (renderProjectsOfFP.classList.contains('third-project')) {
    renderProjectsOfFP.classList.add('second-project');
    renderProjectsOfFP.classList.remove('third-project');
    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageSecondProject);
    return
  } else if (renderProjectsOfFP.classList.contains('second-project')) {
    renderProjectsOfFP.classList.add('first-project');
    renderProjectsOfFP.classList.remove('second-project');
    renderProjectsOfFP.innerHTML = '';
    renderProjectsOfFP.insertAdjacentHTML('beforeend', firstPageFirstProject);  
    btnLeftFP.classList.add('visually-hidden');
    return
  }
  return
}




/////////////////////////////////////////////////////////////////////////////////////
////////////////////////// P R O J E C T S //////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
////////////////////// S E C O N D //// P A G E /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



const secondPageFirstProject = `<div class="render-sp-wrap first-project">
        <h3 class="visually-hidden">Our book</h3>
        <p class="project-sp-subtitle">BOOKS WITHOUT BORDERS</p>
        <img
          src="./image/projects/page-2/img-project-sp-1.jpg"
          alt="children's books"
          class="project-sp-img"
        />
        <div class="sp-slider">
          <span class="slider-item"></span>
          <span class="slider-item"></span>
          <span class="slider-item"></span>
          <span class="slider-item active"></span>
        </div>
        <div class="project-sp-info-wrap">
          <p class="project-sp-info">
            Another humanitarian and important project, initiated by the first
            lady of Ukraine Olena Zelenska, saw the light already with the
            beginning of the war. The "Books without borders" project is
            implemented in 11 countries of the world and has 80,000 printed
            books.
          </p>
        </div>
      </div>`;

const secondPageSecondProject = `<div class="render-sp-wrap first-project">
        <h3 class="visually-hidden">Our book</h3>
        <p class="project-sp-subtitle">BOOKS WITHOUT BORDERS</p>
        <img
          src="./image/projects/page-2/img-project-sp-2.jpg"
          alt="book's maker"
          class="project-sp-img"
        />
        <div class="sp-slider">
          <span class="slider-item"></span>
          <span class="slider-item"></span>
          <span class="slider-item active"></span>
          <span class="slider-item"></span>
        </div>
        <div class="project-sp-info-wrap">
          <p class="project-sp-info">
            Olena Zelenska saya, the project works like this: Ukrainian publishing houses provide ready-made layouts of their bright and beautifully designed books, and then Ukrainian embassies negotiate/look for partners among foreign printers that produce these books.
          </p>
        </div>
      </div>`;

const secondPageThirdProject = `<div class="render-sp-wrap first-project">
        <h3 class="visually-hidden">Our book</h3>
        <p class="project-sp-subtitle">BOOKS WITHOUT BORDERS</p>
        <img
          src="./image/projects/page-2/img-project-sp-3.jpg"
          alt="children's gift"
          class="project-sp-img"
        />
        <div class="sp-slider">
          <span class="slider-item"></span>
          <span class="slider-item active"></span>
          <span class="slider-item"></span>
          <span class="slider-item"></span>
        </div>
        <div class="project-sp-info-wrap">
          <p class="project-sp-info">
            Children who left their homes because of the war did not take books with them. Their families often evacuated with nothing at all. And now a children's book in the native language can become a part of home, peace, a moment of tranquility. This is precisely why our project "Books without borders".
          </p>
        </div>
      </div>`; 

const secondPageFourthProject = `<div class="render-sp-wrap first-project">
        <h3 class="visually-hidden">Our book</h3>
        <p class="project-sp-subtitle">BOOKS WITHOUT BORDERS</p>
        <img
          src="./image/projects/page-2/img-project-sp-4.jpg"
          alt="happy children"
          class="project-sp-img"
        />
        <div class="sp-slider">
          <span class="slider-item active"></span>
          <span class="slider-item"></span>
          <span class="slider-item"></span>
          <span class="slider-item"></span>
        </div>
        <div class="project-sp-info-wrap">
          <p class="project-sp-info">
            "This bright world, inhabited by baby elephants and magical lions, does not and cannot have borders. It will only expand, because right now dozens of countries are joining the project," the President's wife wrote.
          </p>
        </div>
      </div>`

const renderProjectsOfSP = document.querySelector('.render-sp-wrap')
const btnRightSP = document.querySelector("[data-button-right-sp");
const btnLeftSP = document.querySelector("[data-button-left-sp");

btnRightSP.addEventListener('click', renderNextPageProjectsSP);
btnLeftSP.addEventListener('click', renderPreviousPageProjectsSP);

btnLeftSP.classList.add('visually-hidden');

function renderNextPageProjectsSP() {

  if (renderProjectsOfSP.classList.contains('first-project')) {
    renderProjectsOfSP.classList.remove('first-project');
    renderProjectsOfSP.classList.add('second-project');
    btnLeftSP.classList.remove('visually-hidden');

    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageSecondProject);
    return
    }
  else if (renderProjectsOfSP.classList.contains('second-project')) {
        renderProjectsOfSP.classList.remove('second-project');
    renderProjectsOfSP.classList.add('third-project');
    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageThirdProject);
    return
  }
  else if (renderProjectsOfSP.classList.contains('third-project')) {
    btnRightSP.classList.add('visually-hidden')
    renderProjectsOfSP.classList.remove('third-project');
    renderProjectsOfSP.classList.add('fourth-project');
    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageFourthProject);
    return
  }
  return
}

function renderPreviousPageProjectsSP() {
  if (renderProjectsOfSP.classList.contains('fourth-project')) {
    btnRightSP.classList.remove('visually-hidden');
    renderProjectsOfSP.classList.add('third-project');
    renderProjectsOfSP.classList.remove('fourth-project');
    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageThirdProject);
    return
  } else if (renderProjectsOfSP.classList.contains('third-project')) {
    renderProjectsOfSP.classList.add('second-project');
    renderProjectsOfSP.classList.remove('third-project');
    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageSecondProject);
    return
  } else if (renderProjectsOfSP.classList.contains('second-project')) {
    renderProjectsOfSP.classList.add('first-project');
    renderProjectsOfSP.classList.remove('second-project');
    renderProjectsOfSP.innerHTML = '';
    renderProjectsOfSP.insertAdjacentHTML('beforeend', secondPageFirstProject);  
    btnLeftSP.classList.add('visually-hidden');
    return
  }
  return
}
