import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralElementsComponent} from './general-elements/general-elements.component';
import {AdvancedElementsComponent} from './advanced-elements/advanced-elements.component';
import {EditorsComponent} from './editors/editors.component';
import {ComposeComponent} from '../mail-box/compose/compose.component';

const routes: Routes = [
  {path: '', children: [
      {path: 'general', component: GeneralElementsComponent,
        data: {
          page: {title: 'General Form Elements', subTitle: 'Preview'},
        }},
      {path: 'advanced', component: AdvancedElementsComponent,
        data: {
          page: {title: 'Advanced Form Elements', subTitle: 'Preview'},
        }},
      {path: 'editors', component: EditorsComponent,
        data: {
          page: {title: 'Text Editors', subTitle: 'Advanced form element'},
        }},
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
