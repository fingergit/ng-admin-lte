import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './widgets/widgets.component';
import {NgAdminLteModule} from 'ng-admin-lte';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    RouterModule,
    WidgetsRoutingModule,
    NgAdminLteModule
  ]
})
export class WidgetsModule { }
