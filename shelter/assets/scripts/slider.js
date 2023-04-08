import { pets } from '../mock/pets.js';
import { getRandomInt, shuffle } from './utils.js';
import { Popup } from './popup.js';
export { Slider };

let GROUP_SIZE = 0;
let currentPage = 0;
let prevBreakPoint = 0;
let currentWindowSize = 0;
let prevCardGroup;
let currentCardGroup;
let lastFuncButton = 'none';
let expandedSliderCardList = [];
let dataArrayClone = getDataClone();
const windowSize = document.body.clientWidth;

const slider = document.querySelector('.pet-slider');
const compactSlider = document.querySelector('.pet-slider--short');
const expandedSlider = document.querySelector('.pet-slider--expanded');


class Slider {
  init() {
    if (compactSlider) {
      render(compactSlider, getCompactSliderComponent());
      const petList = compactSlider.querySelector('.pet-list');

      sizeControl(petList);
      compactSliderInit(petList);

      compactSlider.addEventListener('click', (evt) => {
        const button = evt.target.closest('.pet-slider__button');

        if (!button) {
          return;
        }

        const direction = button.dataset.direction;
        if (direction === 'right') {
          petList.classList.add('pet-list--from-right');
        }
        if (direction === 'left') {
          petList.classList.add('pet-list--from-left');
        }

        slide(direction, petList);
        trackSliderAnimation(direction, petList);
        const buttons = compactSlider.querySelectorAll('.pet-slider__button');
        for (let item of buttons) {
          item.disabled = 'true';
        }
      });
      const popup = new Popup(slider, dataArrayClone);
      popup.init();
    }
    if (expandedSlider) {
      render(expandedSlider, getExpandedSliderComponent());
      const petList = expandedSlider.querySelector('.pet-list');

      sizeControl(petList);
      expandedSliderInit(petList);
      sliderPageButtonsControl(currentPage);

      expandedSlider.addEventListener('click', (evt) => {
        const button = evt.target.closest('.button');
        if (!button) {
          return;
        }

        const direction = button.dataset.direction;
        if (direction === 'right') {
          petList.classList.add('pet-list--from-right');
        }
        if (direction === 'left') {
          petList.classList.add('pet-list--from-left');
        }

        switch (button.dataset.action) {
          case 'to-start': toStartPage(petList);
            break;
          case 'to-prev': toPrevPage(petList);
            break;
          case 'to-next': toNextPage(petList);
            break;
          case 'to-end': toEndPage(petList);
            break;
        }

        trackSliderAnimation(direction, petList);
      });
      const popup = new Popup(slider, dataArrayClone);
      popup.init();
    }
    return;
  }
}

function getDataClone() {
  const initCardsList = pets.slice();
  return initCardsList.map((card, index) => {
    const clone = Object.assign({}, card);
    clone.popupId = index;
    return clone;
  });
}

function resizeExpandedSlider(petList) {
  const pageCardList = expandedSliderCardList.slice(currentPage * GROUP_SIZE, currentPage * GROUP_SIZE + GROUP_SIZE);
  render(petList, getSliderListElement(pageCardList));
  moveToPage(currentPage, petList);
  sliderPageButtonsControl(currentPage);
}

function getCardPage(prevGroupSize) {
  const currentPageCards = expandedSliderCardList.slice(currentPage * prevGroupSize, currentPage * prevGroupSize + prevGroupSize);
  const firstCardInPage = currentPageCards[0];
  const cardPage = Math.floor((firstCardInPage.id) / GROUP_SIZE);
  return cardPage;
}

function toStartPage(petList) {
  currentPage = 0;
  moveToPage(currentPage, petList);
}

function toPrevPage(petList) {
  currentPage--;
  moveToPage(currentPage, petList);
}

function toNextPage(petList) {
  currentPage++;
  moveToPage(currentPage, petList);
}

function toEndPage(petList) {
  currentPage = Math.ceil(expandedSliderCardList.length / GROUP_SIZE) - 1;
  moveToPage(currentPage, petList);
}

function moveToPage(currentPage, petList) {

  const pageNumberElement = document.querySelector('.pagination__page-number-group .button span');
  pageNumberElement.textContent = `${currentPage + 1}`;

  petList.innerHTML = '';
  const pageGroup = expandedSliderCardList.slice(currentPage * GROUP_SIZE, (currentPage + 1) * GROUP_SIZE);
  render(petList, getSliderListElement(pageGroup));
  sliderPageButtonsControl(currentPage);

  const pagination = document.querySelector('.pagination');
  const buttons = Array.from(pagination.querySelectorAll('.button')).filter((button) => button.dataset.action !== 'page-number');
  for (let button of buttons) {
    button.disabled = 'true';
  }
}

function sliderPageButtonsControl(currentPage) {
  const pageLimit = Math.ceil(expandedSliderCardList.length / GROUP_SIZE);
  const buttons = Array.from(document.querySelectorAll('.button'));
  const backwardButtons = buttons.filter((item) => ['to-start', 'to-prev'].includes(item.dataset.action));
  const forwardButtons = buttons.filter((item) => ['to-next', 'to-end'].includes(item.dataset.action));

  if (currentPage > 0) {
    for (let button of backwardButtons) {
      button.disabled = '';
    }
  } else {
    for (let button of backwardButtons) {
      button.disabled = 'true';
    }
  }

  if (currentPage + 1 === pageLimit) {
    for (let button of forwardButtons) {
      button.disabled = 'true';
    }
  } else {
    for (let button of forwardButtons) {
      button.disabled = '';
    }
  }
}

function sizeControl(petList) {
  const SCROLL_BAR = 0;
  const mobileSize = 320 + SCROLL_BAR;
  const tabletSize = 768 + SCROLL_BAR;
  const desktopSize = 1280 + SCROLL_BAR;

  if (compactSlider) {
    if (windowSize >= mobileSize) {
      GROUP_SIZE = 1;
      prevBreakPoint = mobileSize;
    }
    if (windowSize >= tabletSize) {
      GROUP_SIZE = 2;
      prevBreakPoint = tabletSize;
    }
    if (windowSize >= desktopSize) {
      GROUP_SIZE = 3;
      prevBreakPoint = desktopSize;
    }
  }
  if (expandedSlider) {
    if (windowSize >= mobileSize) {
      GROUP_SIZE = 3;
      prevBreakPoint = mobileSize;
    }
    if (windowSize >= tabletSize) {
      GROUP_SIZE = 6;
      prevBreakPoint = tabletSize;
    }
    if (windowSize >= desktopSize) {
      GROUP_SIZE = 8;
      prevBreakPoint = desktopSize;
    }
  }

  window.addEventListener('resize', () => {
    currentWindowSize = Math.max(
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    );
    if (compactSlider) {
      if (currentWindowSize < tabletSize && prevBreakPoint !== mobileSize) {
        prevBreakPoint = mobileSize;
        GROUP_SIZE = 1;
        compactSliderInit(petList);
      }

      if (currentWindowSize >= tabletSize && currentWindowSize < desktopSize && prevBreakPoint !== tabletSize) {
        prevBreakPoint = tabletSize;
        GROUP_SIZE = 2;
        compactSliderInit(petList);
      }

      if (currentWindowSize >= desktopSize && prevBreakPoint !== desktopSize) {
        prevBreakPoint = desktopSize;
        GROUP_SIZE = 3;
        compactSliderInit(petList);
      }
    }

    if (expandedSlider) {
      if (currentWindowSize < tabletSize && prevBreakPoint !== mobileSize) {
        prevBreakPoint = mobileSize;
        const prevGroupSize = GROUP_SIZE;
        GROUP_SIZE = 3;
        currentPage = getCardPage(prevGroupSize);
        resizeExpandedSlider(petList);
      }

      if (currentWindowSize >= tabletSize && currentWindowSize < desktopSize && prevBreakPoint !== tabletSize) {
        prevBreakPoint = tabletSize;
        const prevGroupSize = GROUP_SIZE;
        GROUP_SIZE = 6;
        currentPage = getCardPage(prevGroupSize);
        resizeExpandedSlider(petList);
      }

      if (currentWindowSize >= desktopSize && prevBreakPoint !== desktopSize) {
        prevBreakPoint = desktopSize;
        const prevGroupSize = GROUP_SIZE;
        GROUP_SIZE = 8;
        currentPage = getCardPage(prevGroupSize);
        resizeExpandedSlider(petList);
      }
    }
  });
}

function expandedSliderInit(petList) {
  petList.innerHTML = '';
  expandedSliderCardList = generateCardList(dataArrayClone, 48);
  render(petList, getSliderListElement(expandedSliderCardList.slice(currentPage, currentPage + GROUP_SIZE)));
}

function compactSliderInit(petList) {
  lastFuncButton = 'none';
  petList.innerHTML = '';
  currentCardGroup = getCardGroup(GROUP_SIZE, dataArrayClone);
  render(petList, getSliderListElement(currentCardGroup));
}

function generateCardList(source, cardCount) {
  const result = [];
  const sets = cardCount / source.length;
  for (let i = 0; i < sets; i++) {
    const cardListClone = source.slice();
    shuffle(cardListClone);
    if (result.length === 0) {
      result.push(...cardListClone);
    } else {
      const slice = result.slice((i * 6 - result.length) % 6);
      const head = cardListClone.filter((card) => !slice.includes(card));
      const tail = cardListClone.filter((card) => slice.includes(card));
      const sortedListClone = shuffle(head).concat(shuffle(tail));
      result.push(...sortedListClone);
    }
  }
  result.length = cardCount;
  const clonedObjArray = result.map((card, index) => {
    const clone = Object.assign({}, card);
    clone.id = index;
    return clone;
  });
  return clonedObjArray;
}

function trackSliderAnimation(direction, petList) {
  petList.lastElementChild.addEventListener('animationend', () => {
    petList.classList.remove('pet-list--from-right', 'pet-list--from-left');
    const buttons = document.querySelectorAll('.pet-slider__button');
    if (buttons) {
      for (let item of buttons) {
        item.disabled = '';
      }
    }

    const pagination = document.querySelector('.pagination');
    if (pagination) {
      const paginationButtons = Array.from(pagination.querySelectorAll('.button')).filter((button) => button.dataset.action !== 'page-number');
      for (let button of paginationButtons) {
        button.disabled = '';
        sliderPageButtonsControl(currentPage);
      }
    }
  });
}

function getExpandedSliderComponent() {
  return (
    `
<div class="pet-slider__viewport">
  <ul class="our-friends__pet-list pet-list pet-list--long">
  </ul>
</div>
<div class="pet-slider__pagination pagination">
  <div class="pagination__prev-button-group">
    <button class="pagination__to-start-button button button--circle button--prev" data-action="to-start" data-direction="left">
      <span class="visually-hidden">To begin</span>
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
    </button>
    <button class="pagination__to-prev-button button button--circle button--prev" data-action="to-prev" data-direction="left">
      <span class="visually-hidden">previous</span>
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
    </button>
  </div>
  <div class="pagination__page-number-group">
    <button class="button button--circle button--active" data-action="page-number"><span>1</span></button>
  </div>
  <div class="pagination__next-button-group">
    <button class="pagination__to-next-button button button--circle button--next" data-action="to-next" data-direction="right">
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
      <span class="visually-hidden">next</span>
    </button>
    <button class="pagination__to-end-button button button--circle button--next" data-action="to-end" data-direction="right">
      <span class="visually-hidden">To end</span>
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
      <svg width="10" height="11"><use xlink:href="#lgt"></use></svg>
    </button>
  </div>
</div>
`
  );
}

function getCompactSliderComponent() {
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
  const { name, img, type, breed, description, age, inoculations, diseases, parasites, id, popupId } = card
  const cardElementMarkup = (
    `
<li class="pet-list__item" tabindex="0" data-popup-id="${popupId}" data-number=${index}${id ? ` data-id="${id}"` : ''}>
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
  const prevCardNames = prevCardGroup
    .map((item) => Object.entries(item))
    .map((item) => item[0][1]);
  const noCrossCardList = dataArrayClone
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
  const sourceClone = source.slice();
  return new Array(groupSize)
    .fill(0)
    .map(() => {
      const index = getRandomInt(0, sourceClone.length - 1);
      return sourceClone.splice(index, 1)[0];
    });
}
