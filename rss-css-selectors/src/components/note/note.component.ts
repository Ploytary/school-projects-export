import './note.component.scss';
import { IBaseConfig } from '../../types/constructor-config-options';
import { mergeConfigs } from '../../utils/merge-configs';
import { BaseComponent } from '../base.component';
import { ButtonComponent } from '../button/button.component';

const componentBaseConfig: IBaseConfig = {
  tagName: 'div',
  className: 'note',
};

const ChildrenClasses = {
  ROOT: componentBaseConfig.className,
  DESCRIPTION: `${componentBaseConfig.className}__description`,
  TITLE: `${componentBaseConfig.className}__title`,
  TEXT: `${componentBaseConfig.className}__text`,
  STRONG_TEXT: `${componentBaseConfig.className}__text--strong`,
  CODE: `${componentBaseConfig.className}__code`,
  SUBMIT_BUTTON: [`${componentBaseConfig.className}__submit-button`, 'button--accent'],
  TOGGLE_BUTTON: `${componentBaseConfig.className}__toggle-button`,
};

const ElementsText = {
  TITLE: `No worries, you've got this!`,
  TEXT_MARKUP: `<p class="${ChildrenClasses.TITLE}">No worries, you've got this!</p>
  <p class="${ChildrenClasses.TEXT}">
    You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.
  </p>
  <p class="${ChildrenClasses.TEXT} ${ChildrenClasses.STRONG_TEXT}">Exhibit 1 A CSS Rule</p>
  <pre class="${ChildrenClasses.CODE}"><kbd><code>p {
    margin-bottom: 12px;
  }</code></kbd></pre>
  <p class="${ChildrenClasses.TEXT}">
    Here, the "p" is the selector (selects all elements) and applies the margin-bottom style.
  </p>
  <p class="${ChildrenClasses.TEXT}">
    "To play, type in a CSS selector in the editor below to select the correct items on the table.If you get it right, you'll advance to the next level.
  </p>
  <p class="${ChildrenClasses.TEXT}"> Hover over the items on the table to see their HTML markup. </p>
  <p class="${ChildrenClasses.TEXT}"> Get help with selectors on the right! →</p>`,
  SUBMIT_BUTTON: `Ok, got it!`,
  TOGGLE_BUTTON: `Help, I'm stuck!`,
};

export class NoteComponent extends BaseComponent<HTMLElement> {
  submitButton: ButtonComponent;
  toggleButton: ButtonComponent;

  constructor(constructorConfig?: IBaseConfig) {
    const resultConfig = mergeConfigs<IBaseConfig>(componentBaseConfig, constructorConfig);
    super(resultConfig);

    const description = new BaseComponent({
      tagName: 'div',
      className: ChildrenClasses.DESCRIPTION,
      parentComponent: this,
    });

    new BaseComponent({
      tagName: 'p',
      className: ChildrenClasses.TITLE,
      textContent: ElementsText.TITLE,
      parentComponent: description,
    });

    description.getNode().innerHTML = ElementsText.TEXT_MARKUP;

    this.submitButton = new ButtonComponent({
      className: ChildrenClasses.SUBMIT_BUTTON,
      textContent: ElementsText.SUBMIT_BUTTON,
      parentComponent: description,
    });

    this.toggleButton = new ButtonComponent({
      className: ChildrenClasses.TOGGLE_BUTTON,
      textContent: ElementsText.TOGGLE_BUTTON,
      parentComponent: this,
    });
  }
}
