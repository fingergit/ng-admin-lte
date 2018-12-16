import {AltSize} from './alt-size';
import {AltButtonColor, AltColor} from 'ng-admin-lte';

export interface AltButtonOption {
  color?: AltButtonColor;
  size?: AltSize|string;
  flat?: boolean;
  disabled?: boolean;
  block?: boolean;
  title?: string;
  icon?: string;
  [propName: string]: any;
}

export interface AltButtonGroupOption {
  buttons: Array<any>;
  [propName: string]: any;
}
