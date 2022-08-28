export {project}

const firstPageFirstProject = `<div class="project-fp-titles-wrap" id = "#first">
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
        <button type="button"data-button-right>
        <svg class="project-icon-right" width="40px" height="40px">
          <use href="./image/icon.svg#icon-arrow-right"></use>
        </svg>
        </button>
        <button type="button"data-button-left><svg
          class="project-icon-left visually-hidden"
          width="40px"
          height="40px"
        >
        </button>
          <use href="./image/icon.svg#icon-arrow-left"></use>
        </svg>
      </div>`;

const firstPageSecondProject = `<div class="project-fp-titles-wrap" id = "#second">
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

const firstPageThirdProject = `<div class="project-fp-titles-wrap" id = "#third">
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

const firstPageFourthProject = `<div class="project-fp-titles-wrap" id = "#fourth">
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


// const first = document.querySelector('#first');
// const second = document.querySelector('#second');
// const third = document.querySelector('#third');
// const fourth = document.querySelector('#fourth');

const firstPageProject = document.querySelector('.projects-fp')
const btnRight = document.querySelector("[data-button-right]");
const btnLeft = document.querySelector("[data-button-left]");

btnRight.addEventListener('click', renderNextPageProjects);
// btnLeft.addEventListener('click', renderPreviousPageProjects);


function renderNextPageProjects() {
  if (firstPageFirstProject) {
      firstPageProject.innerHTML = '';
    firstPageProject.insertAdjacentHTML('beforeend', firstPageSecondProject);
    console.log(firstPageProject === firstPageSecondProject)
    return
  }
  else if (firstPageSecondProject) {
    firstPageProject.innerHTML = '';
    firstPageProject.insertAdjacentHTML('beforeend', firstPageThirdProject);
    return
  }
  else if (firstPageThirdProject) {
    firstPageProject.innerHTML = '';
    firstPageProject.insertAdjacentHTML('beforeend', firstPageFourthProject)
    return
  }
  return
// console.log(classList.contains('.second'))
}
// console.log(firstPageFirstProject)

function renderPreviousPageProjects() {
}