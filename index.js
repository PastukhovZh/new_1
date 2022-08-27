// import { renderMap } from './js/renderMap';
const easternEurope = document.querySelector('#easternEurope');
const westernEurope = document.querySelector('#western-europe');
const asia = document.querySelector('#asia');
const nearEast = document.querySelector('#near-east');
const africa = document.querySelector('#africa');

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
                src="./image/region-image/near-east/turkey"
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
            <p class="region-image__text">Morocco</p>/
        </ul>`;
  
  
easternEurope.addEventListener('click', renderMapInEasternEurope);
westernEurope.addEventListener('click', renderMapInWesternEurope);
asia.addEventListener('click', renderMapInAsia);
nearEast.addEventListener('click', renderMapInNearEast);
africa.addEventListener('click', renderMapInAfrica);


function renderMapInEasternEurope(){
  if(renderEasternEurope){
    regionList.innerHTML = ''
    regionList.insertAdjacentHTML('beforeend', renderEasternEurope);
    return
  }
}
function renderMapInWesternEurope() {
  if(renderWesternEurope){
    regionList.innerHTML = ''
    regionList.insertAdjacentHTML('beforeend', renderWesternEurope);
    return
  }
}
function renderMapInAsia(){
  if(renderEasternEurope){
    regionList.innerHTML = ''
    regionList.insertAdjacentHTML('beforeend', renderAsia);
    return
  }
}
function renderMapInNearEast(){
  if(renderEasternEurope){
    regionList.innerHTML = ''
    regionList.insertAdjacentHTML('beforeend', renderNearEast);
    return
  }
}
function renderMapInAfrica(){
  if(renderEasternEurope){
    regionList.innerHTML = ''
    regionList.insertAdjacentHTML('beforeend', renderAfrica);
    return
  }
}
