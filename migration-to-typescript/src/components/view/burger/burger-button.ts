import './burger-button.css';
import { getGuaranteedElement } from '../../../utils/common';

const menuButton: HTMLElement = getGuaranteedElement(document, '.burger-button');
const menuElement: HTMLElement = getGuaranteedElement(document, '.sources');
document.body.addEventListener('click', menuClickHandler);

function menuClickHandler(evt: MouseEvent): void {
    const target: HTMLElement = evt.target as HTMLElement;
    const button: HTMLElement | null = target.closest('.burger-button');
    const sourceName: HTMLElement | null = target.closest('.source__item');
    const menuArea: HTMLElement | null = target.closest('.sources');
    const buttonImages = menuButton.querySelectorAll('.burger-button__image');

    if (button || sourceName || !menuArea) {
        menuElement.classList.toggle('sources--expanded');
        buttonImages.forEach((image) => image.classList.toggle('burger-button__image--visible'));
    }
}
