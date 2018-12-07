import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardV1Component} from './dashboard-v1/dashboard-v1.component';
import {DashboardV2Component} from './dashboard-v2/dashboard-v2.component';

const routes: Routes = [
  {path: '', children: [
      { path: 'index', component: DashboardV1Component,
        data: {
          page: {title: 'Dashboard', subTitle: 'Control panel'},
        }
      },
      { path: 'index2', component: DashboardV2Component,
        data: {
          page: {title: 'Dashboard', subTitle: 'Version 2.0'},
        }
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
