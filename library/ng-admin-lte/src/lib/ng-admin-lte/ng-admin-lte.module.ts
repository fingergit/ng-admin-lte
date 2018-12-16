import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AltWidgetsModule} from '../alt-widgets/alt-widgets.module';
import {AltUiElementsModule} from '../alt-ui-elements/alt-ui-elements.module';
import {AltSelect2Module} from '../alt-select2/alt-select2.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AltWidgetsModule,
    AltUiElementsModule,
    AltSelect2Module,
  ],
  exports: [
    AltWidgetsModule,
    AltUiElementsModule,
    AltSelect2Module
  ]
})
export class NgAdminLteModule { }

export * from '../model/alt-app-config';
export * from '../model/alt-page-config';
export * from '../model/alt-color';
export * from '../model/alt-box-data';
export * from '../model/alt-info-box-data';
export * from '../model/alt-small-box-data';
