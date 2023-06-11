//функция поиска гарантированных элементов на странице
export const getGuaranteedElement = (parentElement: HTMLElement | Document, selector: string): HTMLElement => {
    return parentElement.querySelector(selector) as HTMLElement;
};
