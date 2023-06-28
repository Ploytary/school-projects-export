import './playground.component.scss';
import { GlobalClass } from '../../enums/global-class';
import { IBaseConfig } from '../../types/constructor-config-options';
import { IGameLevel } from '../../types/model';
import { mergeConfigs } from '../../utils/merge-configs';
import { BaseComponent } from '../base.component';
import { EditorComponent } from '../editor/editor.component';
import { NoteComponent } from '../note/note.component';
import { TableComponent } from '../table/table.component';

const componentBaseConfig: IBaseConfig = {
  tagName: 'section',
  className: 'playground',
};

const ChildrenClasses = {
  ROOT: componentBaseConfig.className,
  DESCRIPTION: `${componentBaseConfig.className}__description`,
  NOTE: `${componentBaseConfig.className}__note`,
  TABLE: `${componentBaseConfig.className}__table`,
  EDITOR: `${componentBaseConfig.className}__editor`,
};

export class PlaygroundComponent extends BaseComponent<HTMLElement> {
  taskDescription: BaseComponent<HTMLElement>;
  table: BaseComponent<HTMLElement>;
  editor: BaseComponent<HTMLElement>;

  constructor(level: IGameLevel, constructorConfig?: IBaseConfig) {
    const resultConfig = mergeConfigs<IBaseConfig>(componentBaseConfig, constructorConfig);
    super(resultConfig);

    new BaseComponent({
      tagName: 'h2',
      textContent: 'Playground',
      className: GlobalClass.ALLY_HIDDEN,
      parentComponent: this,
    });

    this.taskDescription = new BaseComponent({
      tagName: 'p',
      className: ChildrenClasses.DESCRIPTION,
      textContent: level.doThis,
      parentComponent: this,
    });

    new NoteComponent({
      className: ChildrenClasses.NOTE,
      parentComponent: this,
    });

    this.table = new TableComponent(level, { className: ChildrenClasses.TABLE, parentComponent: this });
    this.editor = new EditorComponent(level, { className: ChildrenClasses.EDITOR, parentComponent: this });
  }
}
