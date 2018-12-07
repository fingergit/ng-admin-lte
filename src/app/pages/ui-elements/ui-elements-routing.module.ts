import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralComponent} from './general/general.component';
import {IconsComponent} from './icons/icons.component';
import {ButtonsComponent} from './buttons/buttons.component';
import {SlidersComponent} from './sliders/sliders.component';
import {TimelineComponent} from './timeline/timeline.component';
import {ModalsComponent} from './modals/modals.component';
import {WidgetsComponent} from '../widgets/widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'general', component: GeneralComponent,
        data: {
          page: {title: 'General UI', subTitle: 'Preview of UI elements'},
        }},
      {path: 'icons', component: IconsComponent,
        data: {
          page: {title: 'Icons', subTitle: 'a set of beautiful icons'},
        }},
      {path: 'buttons', component: ButtonsComponent,
        data: {
          page: {title: 'Buttons', subTitle: 'Control panel'},
        }},
      {path: 'sliders', component: SlidersComponent,
        data: {
          page: {title: 'Sliders', subTitle: 'range sliders'},
        }},
      {path: 'timeline', component: TimelineComponent,
        data: {
          page: {title: 'Timeline', subTitle: 'example'},
        }},
      {path: 'modals', component: ModalsComponent,
        data: {
          page: {title: 'Modals', subTitle: 'new'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiElementsRoutingModule { }
