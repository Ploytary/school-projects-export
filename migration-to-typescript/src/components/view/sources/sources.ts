import './sources.css';
import { findGuaranteedElement } from '../../../utils/common';
import { ISource, IDrawable } from '../../../utils/models';

class Sources implements IDrawable<ISource[]> {
    public draw(data: ISource[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = findGuaranteedElement(
            document,
            '#sourceItemTemp'
        ) as HTMLTemplateElement;

        data.forEach((item: ISource) => {
            const sourceClone: HTMLElement = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            findGuaranteedElement(sourceClone, '.source__item-name').textContent = item.name;
            findGuaranteedElement(sourceClone, '.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        findGuaranteedElement(document, '.sources').append(fragment);
    }
}

export default Sources;
