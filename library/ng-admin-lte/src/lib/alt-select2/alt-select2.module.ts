import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltSelect2Component } from './alt-select2/alt-select2.component';
import {AltUiElementsModule} from '../alt-ui-elements/alt-ui-elements.module';

@NgModule({
  declarations: [AltSelect2Component],
  imports: [
    CommonModule,
    AltUiElementsModule
  ],
  exports: [AltSelect2Component]
})
export class AltSelect2Module { }
