import './editor.component.scss';
import { GlobalClass } from '../../enums/global-class';
import { IBaseConfig } from '../../types/constructor-config-options';
import { ICodeViewConfig, IGameLevel } from '../../types/model';
import { mergeConfigs } from '../../utils/merge-configs';
import { BaseComponent } from '../base.component';
import { CodeViewComponent } from './code-view.component';
import { InputComponent } from '../input.component';
import { ButtonComponent } from '../button/button.component';

const componentBaseConfig: IBaseConfig = {
  tagName: 'section',
  className: 'editor',
};

const ElementsText = {
  COMPONENT_ALLY_TITLE: 'Code editor',
  CSS_EDITOR_TITLE: 'CSS Editor',
  CSS_EDITOR_FILENAME: 'style.css',
  HTML_VIEWER_TITLE: 'HTML Viewer',
  HTML_VIEWER_FILENAME: 'table.html',
  EXAMPLES_TITLE: 'Examples',
  ENTER_BUTTON_TEXT: 'Enter',
  ENTER_BUTTON_ALLY_TEXT: 'Apply selector',
  HELP_BUTTON_TEXT: 'Help',
  HELP_BUTTON_ALLY_TEXT: 'Get help',
  CSS_NOTE: `{ 
/* Styles would go here. */
}

/*
Type a number to skip to a level.
Ex → "5" for level 5
*/`,
};

const ChildrenClasses = {
  ROOT: componentBaseConfig.className,
  CSS_EDITOR: [`${componentBaseConfig.className}__css-editor`, 'code-view--light'],
  HTML_VIEWER: [`${componentBaseConfig.className}__html-viewer`, 'code-view--dark'],
  HTML_VIEWER_CONTENT: `table`,
  SELECTOR_INPUT_FIELD: `code-view__selector-field`,
  SELECTOR_INPUT_PLACEHOLDER: 'Type in a CSS selector',
  SELECTOR_NOTE: `code-view__css-note`,
  SELECTOR_INPUT_FIELD_BUTTON_GROUP: `code-view__input-stroke-buttons`,
  SELECTOR_INPUT_FIELD_BUTTON: 'button--code',
};

export class EditorComponent extends BaseComponent<HTMLElement> {
  selectorEnterButton: BaseComponent<HTMLButtonElement>;
  selectorHelpButton: BaseComponent<HTMLButtonElement>;

  constructor(level: IGameLevel, constructorConfig?: IBaseConfig) {
    const resultConfig = mergeConfigs<IBaseConfig>(componentBaseConfig, constructorConfig);
    super(resultConfig);

    new BaseComponent({
      tagName: 'h3',
      className: GlobalClass.ALLY_HIDDEN,
      textContent: ElementsText.COMPONENT_ALLY_TITLE,
      parentComponent: this,
    });

    const { selectorEnterButton, selectorHelpButton } = this.setCssCodeView();
    this.selectorEnterButton = selectorEnterButton;
    this.selectorHelpButton = selectorHelpButton;

    this.setHtmlCodeView(level);
  }

  private setCssCodeView() {
    const selectorFiled = new BaseComponent({ tagName: 'p', className: ChildrenClasses.SELECTOR_INPUT_FIELD });
    new InputComponent({
      placeholder: ChildrenClasses.SELECTOR_INPUT_PLACEHOLDER,
      parentComponent: selectorFiled,
    });
    const buttonContainer = new BaseComponent({
      tagName: 'span',
      className: ChildrenClasses.SELECTOR_INPUT_FIELD_BUTTON_GROUP,
      parentComponent: selectorFiled,
    });
    const selectorEnterButton = new ButtonComponent({
      className: ChildrenClasses.SELECTOR_INPUT_FIELD_BUTTON,
      allyLabel: ElementsText.ENTER_BUTTON_ALLY_TEXT,
      textContent: ElementsText.ENTER_BUTTON_TEXT,
      parentComponent: buttonContainer,
    });
    const selectorHelpButton = new ButtonComponent({
      className: ChildrenClasses.SELECTOR_INPUT_FIELD_BUTTON,
      allyLabel: ElementsText.HELP_BUTTON_ALLY_TEXT,
      textContent: ElementsText.HELP_BUTTON_TEXT,
      parentComponent: buttonContainer,
    });
    const selectorNote = new BaseComponent({
      tagName: 'p',
      className: ChildrenClasses.SELECTOR_NOTE,
      textContent: ElementsText.CSS_NOTE,
    });
    const options: ICodeViewConfig = {
      title: ElementsText.CSS_EDITOR_TITLE,
      filename: ElementsText.CSS_EDITOR_FILENAME,
      content: [selectorFiled, selectorNote],
    };

    new CodeViewComponent(options, { className: ChildrenClasses.CSS_EDITOR, parentComponent: this });
    return { selectorEnterButton, selectorHelpButton };
  }

  private setHtmlCodeView(level: IGameLevel) {
    const { boardMarkup } = level;
    const container = document.createElement('div');
    container.innerHTML = boardMarkup;

    const elements: (HTMLElement | Text)[] = elementsWrapper(Array.from(container.children) as HTMLElement[]);
    elements.unshift(document.createTextNode('<div class="table">'));
    elements.push(document.createTextNode('</div>'));

    const htmlViewContent = new BaseComponent({ className: 'table' });
    htmlViewContent.getNode().append(...elements);

    const options: ICodeViewConfig = {
      title: ElementsText.HTML_VIEWER_TITLE,
      filename: ElementsText.HTML_VIEWER_FILENAME,
      content: [htmlViewContent],
    };
    new CodeViewComponent(options, { className: ChildrenClasses.HTML_VIEWER, parentComponent: this });

    function elementsWrapper(elements: HTMLElement[]): HTMLElement[] {
      const wrappedElementsArray: HTMLElement[] = [];
      for (const element of elements) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('children-wrapper');
        const idText = element.id ? ` id="${element.id}"` : '';
        const classText = element.className ? ` class="${element.className}"` : '';
        const getAttributeText = element.getAttribute('for') ? ` for="${element.getAttribute('for')}"` : ``;
        const endTagText = element.children.length > 0 ? '' : '/';
        const text = `<${element.tagName.toLocaleLowerCase()}${idText}${classText}${getAttributeText}${endTagText}>`;
        const textNode = document.createTextNode(text);
        wrapper.append(textNode);

        if (element.children.length > 0) {
          const wrappedElements = elementsWrapper(Array.from(element.children) as HTMLElement[]);
          wrapper.append(...wrappedElements);
          const endText = `</${element.tagName.toLowerCase()}>`;
          const endTextNode = document.createTextNode(endText);
          wrapper.append(endTextNode);
        }

        wrappedElementsArray.push(wrapper);
      }
      return wrappedElementsArray;
    }
  }
}
