import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutOptionsRoutingModule } from './layout-options-routing.module';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { BoxedComponent } from './boxed/boxed.component';
import { FixedComponent } from './fixed/fixed.component';
import { CollapsedSidebarComponent } from './collapsed-sidebar/collapsed-sidebar.component';

@NgModule({
  declarations: [TopNavigationComponent, BoxedComponent, FixedComponent, CollapsedSidebarComponent],
  imports: [
    CommonModule,
    LayoutOptionsRoutingModule
  ]
})
export class LayoutOptionsModule { }
