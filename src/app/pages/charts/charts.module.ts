import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { MorrisComponent } from './morris/morris.component';
import { FlotComponent } from './flot/flot.component';
import { InlineChartsComponent } from './inline-charts/inline-charts.component';

@NgModule({
  declarations: [ChartJsComponent, MorrisComponent, FlotComponent, InlineChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
