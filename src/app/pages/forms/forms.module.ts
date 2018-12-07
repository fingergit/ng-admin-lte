import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { GeneralElementsComponent } from './general-elements/general-elements.component';
import { AdvancedElementsComponent } from './advanced-elements/advanced-elements.component';
import { EditorsComponent } from './editors/editors.component';

@NgModule({
  declarations: [GeneralElementsComponent, AdvancedElementsComponent, EditorsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
