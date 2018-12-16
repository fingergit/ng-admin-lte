import {AltColor} from 'ng-admin-lte';

export interface AltSmallBoxData {
  text: string;
  num?: number|string;
  color?: AltColor;
  icon?: string;
  linkText?: string;
  routerLink?: string|Array<any>;
  linkExtUrl?: string;
}
