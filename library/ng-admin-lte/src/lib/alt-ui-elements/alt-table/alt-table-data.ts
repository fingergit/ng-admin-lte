import {TemplateRef} from '@angular/core';

export interface AltTableHeadData {
  checkable: boolean;
  cols?: AltTableColData[];
}

export interface AltTableColData {
  title: string;
  key?: string;
  style?: any;
  cls?: string;
}

export interface AltTableRowData {
  displayData: AltTableCellData[];
  rawData?: any;
}

export interface AltTableCellData {
  key?: string;
  value: any;
  template?: TemplateRef<any>;
}
