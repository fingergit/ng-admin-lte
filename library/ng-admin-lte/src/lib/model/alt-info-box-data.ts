import {AltColor} from 'ng-admin-lte';

export interface AltInfoBoxData {
  text: string;
  num?: number|string;
  color?: AltColor;
  icon?: string;
  progress?: number;
  progressDescription?: string;
  fullColor?: boolean;
}
