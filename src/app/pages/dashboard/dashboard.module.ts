import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardV1Component } from './dashboard-v1/dashboard-v1.component';
import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';

@NgModule({
  declarations: [DashboardV1Component, DashboardV2Component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
