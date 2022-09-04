export {renderNextPageProjectsFP, renderPreviousPageProjectsFP}
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
