import { pets } from '../mock/pets.js';
import { getRandomInt } from './utils.js';

let prevBreakPoint = 0;
let currentWindowSize = 0;
let prevCardGroup;
let lastFuncButton = 'none';
let GROUP_SIZE = 0;
let currentCardGroup;
const windowSize = document.body.clientWidth;

const compactSlider = document.querySelector('.pet-slider--short');

start();

function start() {
  if (compactSlider) {
    render(compactSlider, getSliderComponent());
    const petList = compactSlider.querySelector('.pet-list');
    
    sizeControl(petList);
    sliderInit(petList);
    
    compactSlider.addEventListener('click', (evt) => {
      const button = evt.target.closest('.pet-slider__button');
    
      if (!button) {
        return;
      }
    
      const direction = button.dataset.direction;
      if(direction === 'right') {
        petList.classList.add('pet-list--from-right');
      }
      if(direction === 'left') {
        petList.classList.add('pet-list--from-left');
      }
    
      slide(direction, petList); 
      trackSliderAnimation(direction, petList);
      const buttons = compactSlider.querySelectorAll('.pet-slider__button');
      for (let item of buttons) {
        item.disabled = 'true';
      }
    }); 
  }
  return;
}

function sizeControl(petList) {
  if (windowSize >= 320) {
    GROUP_SIZE = 1;
    prevBreakPoint = 320;
  }
  if (windowSize >= 768) {
    GROUP_SIZE = 2;
    prevBreakPoint = 768;
  }
  if (windowSize >= 1280) {
    GROUP_SIZE = 3;
    prevBreakPoint = 1280;
  }

  window.addEventListener('resize', () => {
    currentWindowSize = document.documentElement.clientWidth;
    if(currentWindowSize < 768 && prevBreakPoint !== 320) {
      prevBreakPoint = 320;
      GROUP_SIZE = 1;
      sliderInit(petList);
    }
  
    if(currentWindowSize >= 768 && currentWindowSize < 1280 && prevBreakPoint !== 768) {
      prevBreakPoint = 768;
      GROUP_SIZE = 2;
      sliderInit(petList);
    }
  
    if(currentWindowSize >= 1280 && prevBreakPoint !== 1280) {
      prevBreakPoint = 1280;
      GROUP_SIZE = 3;
      sliderInit(petList);
    }
  
  });
}

function sliderInit(petList) {
  lastFuncButton = 'none';
  petList.innerHTML = '';
  currentCardGroup = getInitCardGroup(GROUP_SIZE);
  render(petList, getSliderListElement(currentCardGroup));
}

function trackSliderAnimation(direction, petList) {
  if (direction === 'right') {
    petList.firstElementChild.addEventListener('animationend', () => {
      petList.classList.remove('pet-list--from-right', 'pet-list--from-left');
      const buttons = document.querySelectorAll('.pet-slider__button');
      for (let item of buttons) {
        item.disabled = '';
      }
    });
  }
  if (direction === 'left') {
    petList.lastElementChild.addEventListener('animationend', () => {
      petList.classList.remove('pet-list--from-right', 'pet-list--from-left');
      const buttons = document.querySelectorAll('.pet-slider__button');
      for (let item of buttons) {
        item.disabled = '';
      }
    });
  }
}

function getSliderComponent() {
  return (
`
<div class="pet-slider__viewport">
  <ul class="our-friends__pet-list pet-list pet-list--short">
  </ul>
</div>
<div class="our-friends__button-layout">
  <button class="pet-slider__button our-friends__button button button--circle button--prev" data-direction="left">
    <svg width="14" height="6">
      <use xlink:href="#arrow"></use>
    </svg>
  </button>
  <button class="pet-slider__button our-friends__button button button--circle button--next" data-direction="right">
    <svg width="14" height="6">
      <use xlink:href="#arrow"></use>
    </svg>
  </button>
</div>
`
  );
}

function getSliderListElement(cardGroup) {
  return cardGroup.map((card, index) => getSliderCardElement(card, index)).join('\n');
}

function getSliderCardElement(card, index) {
  const {name, img, type, breed, description, age, inoculations, diseases, parasites} = card
  const cardElementMarkup = (
    `
<li class="pet-list__item" tabindex="0" data-number=${index}>
  <h3 class="pet-list__pet-name">${name}</h3>
  <p class="pet-list__pet-species">${type} - ${breed}</p>
  <img class="pet-list__pet-photo" src="${img}" alt="">
  <p class="pet-list__pet-description">
    ${description}
  </p>
  <dl class="pet-list__pet-vitals">
    <dt>Age:</dt>
    <dd>${age}</dd>
    <dt>Inoculations:</dt>
    <dd>${inoculations.join(', ')}</dd>
    <dt>Diseases:</dt>
    <dd>${diseases.join(', ')}</dd>
    <dt>Parasites:</dt>
    <dd>${parasites.join(', ')}</dd>
  </dl>
  <a class="pet-list__link link link--button-format" tabindex="0">Learn more</a>
</li>
    `
  );
  return cardElementMarkup;
}

function render(container, template, position = 'beforeend') {
  container.insertAdjacentHTML(position, template);
}

function getInitCardGroup() {
  const initCardsList = pets.slice();
  const initialPetsCardsGroup = getCardGroup(GROUP_SIZE, initCardsList);
  return initialPetsCardsGroup;
}

function slide(direction, petList) {
  if (lastFuncButton === direction || lastFuncButton === 'none') {
    moveNext(petList);
    lastFuncButton = direction;
  } else {
    movePrev(petList);
    lastFuncButton = direction;
  }
}

function moveNext(petList) {
  prevCardGroup = currentCardGroup;
  const prevCardNames  = prevCardGroup
    .map((item) => Object.entries(item))
    .map((item) => item[0][1]);
  const noCrossCardList = pets
    .slice()
    .filter((item) => !prevCardNames.includes(item.name));
  
  const nextCardGroup = getCardGroup(GROUP_SIZE, noCrossCardList);
  currentCardGroup = nextCardGroup;
  petList.innerHTML = '';
  render(petList, getSliderListElement(currentCardGroup));
}

function movePrev(petList) {
  const temp = currentCardGroup
  currentCardGroup = prevCardGroup;
  prevCardGroup = temp;
  petList.innerHTML = '';
  render(petList, getSliderListElement(currentCardGroup));
}

function getCardGroup(groupSize, source) {
  return new Array(groupSize)
    .fill(0)
    .map(() => {
      const index = getRandomInt(0, source.length - 1);
      return source.splice(index, 1)[0];
    });
}
