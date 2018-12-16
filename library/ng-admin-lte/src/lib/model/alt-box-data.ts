import {AltColor} from 'ng-admin-lte';

export interface AltBoxData {
  title: string;
  color?: AltColor;
  solid?: boolean;  // true: color title bar and border.
  removable?: boolean;
  collapsible?: boolean;
  withoutBorder?: boolean;
  customHeader?: boolean;
  [propName: string]: any;
}
