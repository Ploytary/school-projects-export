import { Svg } from '../enums/svg';

export function getElementFromTemplate<T>(template: Svg | string): T extends Svg ? SVGElement : HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = template;
  return container.firstChild as T extends Svg ? SVGElement : HTMLElement;
}
