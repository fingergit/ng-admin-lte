import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartJsComponent} from './chart-js/chart-js.component';
import {MorrisComponent} from './morris/morris.component';
import {FlotComponent} from './flot/flot.component';
import {InlineChartsComponent} from './inline-charts/inline-charts.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'chartjs', component: ChartJsComponent,
        data: {
          page: {title: 'ChartJS', subTitle: 'Preview sample'},
        }},
      {path: 'morris', component: MorrisComponent,
        data: {
          page: {title: 'Morris Charts', subTitle: 'Preview sample'},
        }},
      {path: 'flot', component: FlotComponent,
        data: {
          page: {title: 'Flot Charts', subTitle: 'Preview sample'},
        }},
      {path: 'inline', component: InlineChartsComponent,
        data: {
          page: {title: 'Inline Charts', subTitle: 'multiple types of charts'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
