import { BaseComponent } from '../components/base.component';

export interface IBaseConfigOptions {
  tagName: string;
  className: string | string[];
  textContent: string;
  parentComponent: BaseComponent<HTMLElement>;
}

export interface IConfigOptions extends Partial<IBaseConfigOptions> {
  [key: string]: string | string[] | BaseComponent<HTMLElement> | undefined;
}

export type IAdaptedConfigOptions<ExtendElementInterface> = Partial<IBaseConfigOptions> &
  Omit<Partial<ExtendElementInterface>, keyof IBaseConfigOptions>;
