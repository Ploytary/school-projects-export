export class Popup {
  constructor(container, data) {
    this._container = container;
    this._data = data;
  }

  init() {
    if (!this._container) {
      throw new Error('Контейнер с карточками не найден');
    }

    this._container.addEventListener('click', (evt) => {
      const card = evt.target.closest('.pet-list__item');
      if(!card) {
        return;
      }
      const currentPopupDataItem = this._data.find((dataItem) => +dataItem.popupId === +card.dataset.popupId);
      this._render(document.body, this._getPopupElement(currentPopupDataItem));
    });
  }

  _getPopupElement(data) {
    const { name, img, type, breed, description, age, inoculations, diseases, parasites, id, popupId } = data;
    const cardElementMarkup = (
      `
  <div class="popup card-popup" data-popup-id="${popupId}"${id ? ` data-id="${id}"` : ''}>
    <h3 class="card-popup__pet-name">${name}</h3>
    <p class="card-popup__pet-species">${type} - ${breed}</p>
    <img class="card-popup__pet-photo" src="${img}" alt="">
    <p class="card-popup__pet-description">
      ${description}
    </p>
    <dl class="card-popup__pet-vitals">
      <div class="div">
        <dt>Age:</dt>
        <dd>${age}</dd>
      </div>
      <div class="div">
        <dt>Inoculations:</dt>
        <dd>${inoculations.join(', ')}</dd>
      </div>
      <div class="div">
        <dt>Diseases:</dt>
        <dd>${diseases.join(', ')}</dd>
      </div>
      <div class="div">
        <dt>Parasites:</dt>
        <dd>${parasites.join(', ')}</dd>
      </div>
    </dl>
    <button class="button button--circle card-popup__close-button">
    <svg width="12" height="12">
      <use xlink:href="#cross"></use>
    </svg>
    </button>
  </div>
      `
    );
    return cardElementMarkup;
  }

  _render(container, template, position = 'beforeend') {
    const oldPopup = container.querySelector('.card-popup');
    if (oldPopup) {
      oldPopup.remove();
    }
    container.insertAdjacentHTML(position, template);
    document.body.classList.add('page--popup-modal-active');
    this._switchModalBackground();
    this._switchModalWindow();
  }

  _switchModalWindow() {
    const modalBackground = document.body.querySelector('.modal-background');
    const modalWindow = document.body.querySelector('.card-popup');

    modalBackground.addEventListener('click', () => {
      document.body.classList.remove('page--popup-modal-active');
      modalWindow.remove();
      this._switchModalBackground();
    });

    const closeButton = modalWindow.querySelector('.card-popup__close-button');
    closeButton.addEventListener('click', () => {
      document.body.classList.remove('page--popup-modal-active');
      modalWindow.remove();
      this._switchModalBackground();
    });

    window.addEventListener('resize', () => {
      if (document.body.clientWidth > 768 - 16) {
        document.body.classList.remove('page--popup-modal-active');
        modalWindow.remove();
        this._switchModalBackground();
      }
    });
  }

  _switchModalBackground() {
    const modalBackground = document.body.querySelector('.modal-background');
    if (document.body.classList.contains('page--popup-modal-active')) {
      modalBackground.style.display = 'block';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.paddingRight = '0px';
    } else {
      modalBackground.style.display = 'none';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.paddingRight = '0px';
    }
  }
}