
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