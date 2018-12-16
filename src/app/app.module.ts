import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {NgAdminLteModule} from 'ng-admin-lte';
import {AltWidgetsModule} from '../../library/ng-admin-lte/src/lib/alt-widgets/alt-widgets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgAdminLteModule,
    AltWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
