import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {NgAdminLteModule} from 'ng-admin-lte';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NgAdminLteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
