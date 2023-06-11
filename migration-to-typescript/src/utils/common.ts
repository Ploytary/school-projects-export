//функция поиска гарантированных элементов на странице
export const getGuaranteedElement = (parentElement: HTMLElement | Document, selector: string): HTMLElement => {
    return parentElement.querySelector(selector) as HTMLElement;
};

export function isValidParsedObject<T>(data: unknown, verifProp: keyof T): data is T {
    if (Array.isArray(data) && data.length > 0) {
        return data[0][verifProp] !== undefined;
    } else {
        return false;
    }
}
