import './news.css';
import { IArticle, IDrawable } from '../../../utils/models';
import { findGuaranteedElement } from '../../../utils/common';

class News implements IDrawable<IArticle[]> {
    public draw(data: IArticle[]): void {
        const news: IArticle[] =
            data.length >= 10 ? data.filter((_item: IArticle, idx: number): boolean => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = findGuaranteedElement(
            document,
            '#newsItemTemp'
        ) as HTMLTemplateElement;

        news.forEach((item: IArticle, idx: number): void => {
            const newsClone: HTMLElement = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) findGuaranteedElement(newsClone, '.news__item').classList.add('alt');

            findGuaranteedElement(newsClone, '.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            findGuaranteedElement(newsClone, '.news__meta-author').textContent = item.author || item.source.name;
            findGuaranteedElement(newsClone, '.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            findGuaranteedElement(newsClone, '.news__description-title').textContent = item.title;
            findGuaranteedElement(newsClone, '.news__description-source').textContent = item.source.name;
            findGuaranteedElement(newsClone, '.news__description-content').textContent = item.description;
            findGuaranteedElement(newsClone, '.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer: HTMLElement = findGuaranteedElement(document, '.news');
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;
