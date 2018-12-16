import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltColorPaletteComponent } from './alt-color-palette/alt-color-palette.component';
import {AltWidgetsModule} from '../alt-widgets/alt-widgets.module';
import { AltButtonComponent } from './alt-button/alt-button.component';
import { AltRowComponent } from './alt-row/alt-row.component';
import { AltButtonGroupComponent } from './alt-button-group/alt-button-group.component';
import { AltAppButtonComponent } from './alt-app-button/alt-app-button.component';
import { AltBadgeComponent } from './alt-badge/alt-badge.component';
import { AltFormInputComponent } from './alt-form-input/alt-form-input.component';
import { AltFormComponent } from './alt-form/alt-form.component';
import { AltFormSingleCheckboxComponent } from './alt-form-single-checkbox/alt-form-single-checkbox.component';
import { AltFormTextareaComponent } from './alt-form-textarea/alt-form-textarea.component';
import { AltFormRadioComponent } from './alt-form-radio/alt-form-radio.component';
import { AltFormSelectComponent } from './alt-form-select/alt-form-select.component';
import { AltTableComponent } from './alt-table/alt-table.component';
import { AltSearchBoxComponent } from './alt-search-box/alt-search-box.component';
import {FormsModule} from '@angular/forms';
import { AltBoxTitleComponent } from './alt-box-title/alt-box-title.component';
import { AltBoxBodyComponent } from './alt-box-body/alt-box-body.component';
import { AltBoxFooterComponent } from './alt-box-footer/alt-box-footer.component';
import { AltProgressComponent } from './alt-progress/alt-progress.component';
import { AltLabelComponent } from './alt-label/alt-label.component';
import { AltDataTableComponent } from './alt-data-table/alt-data-table.component';
import {AltSmallBoxComponent} from '../alt-widgets/alt-small-box/alt-small-box.component';
import {AltBoxComponent} from './alt-box/alt-box.component';

const components = [
  AltColorPaletteComponent, AltButtonComponent, AltRowComponent, AltButtonGroupComponent,
  AltAppButtonComponent, AltBadgeComponent, AltFormInputComponent, AltFormComponent,
  AltFormSingleCheckboxComponent, AltFormTextareaComponent, AltFormRadioComponent,
  AltFormSelectComponent, AltTableComponent, AltSearchBoxComponent, AltBoxComponent, AltBoxTitleComponent,
  AltBoxBodyComponent, AltBoxFooterComponent, AltProgressComponent, AltLabelComponent, AltDataTableComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FormsModule,
    AltWidgetsModule
  ],
  exports: [...components]
})
export class AltUiElementsModule { }
