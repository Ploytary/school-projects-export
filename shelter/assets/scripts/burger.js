//burger-menu
const navigation = document.querySelector('.js-main-navigation');
const menuButton = navigation.querySelector('.main-navigation__burger-button');
const modalBackground = document.querySelector('.modal-background');

menuButton.addEventListener('click', switchMenuState);
modalBackground.addEventListener ('click', switchMenuState);
navigation.addEventListener('click', (evt) => {
  const currentPageLink = navigation.querySelector('.navitation-links__item--active .link--navigation');
  const link = evt.target.closest('.link--navigation');

  if (link === currentPageLink) {
    evt.preventDefault();
  }
  const isVisible = window.getComputedStyle(menuButton).display !== 'none';
  if (!isVisible) {
    return;
  }
  if (!link) {
    return;
  }

  switchMenuState();
});

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 768 - 16) {
    navigation.classList.remove('main-navigation--expanded');
    navigation.classList.add('main-navigation--contracted');
    switchModalBackground();
  }
});


function switchMenuState() {
  navigation.classList.toggle('main-navigation--contracted', navigation.classList.contains('main-navigation--expanded'));
  navigation.classList.toggle('main-navigation--expanded');
  switchModalBackground();
}

function switchModalBackground() {
  if (navigation.classList.contains('main-navigation--expanded')) {
    modalBackground.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.paddingRight = '16px';
  } else {
    modalBackground.style.display = 'none';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.paddingRight = '0px';
  }
}