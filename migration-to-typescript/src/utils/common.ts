//функция поиска гарантированных элементов на странице
export const findGuaranteedElement = (parentElement: HTMLElement | Document, selector: string): HTMLElement => {
    return parentElement.querySelector(selector) as HTMLElement;
};
