import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import {FourOFourErrorComponent} from './four-o-four-error/four-o-four-error.component';
import {FiveOOErrorComponent} from './five-o-o-error/five-o-o-error.component';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {PacePageComponent} from './pace-page/pace-page.component';
import {GeneralElementsComponent} from '../forms/general-elements/general-elements.component';
import {AltPageType} from 'ng-admin-lte';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'invoice', component: InvoiceComponent,
        data: {
          page: {title: 'Invoice', subTitle: '#007612'},
        }},
      { path: 'profile', component: ProfileComponent,
        data: {
          page: {title: 'User Profile'},
        }},
      { path: 'login', component: LoginComponent,
        data: {
          page: {title: 'Log in', pageType: AltPageType.CUSTOM},
        }},
      { path: 'register', component: RegisterComponent,
        data: {
          page: {title: 'Registration Page', pageType: AltPageType.CUSTOM},
        }},
      { path: 'lockscreen', component: LockScreenComponent,
        data: {
          page: {title: 'Lockscreen', pageType: AltPageType.CUSTOM},
        }},
      { path: '404', component: FourOFourErrorComponent,
        data: {
          page: {title: '404 Error Page'},
        }},
      { path: '500', component: FiveOOErrorComponent,
        data: {
          page: {title: '500 Error Page'},
        }},
      { path: 'blank', component: BlankPageComponent,
        data: {
          page: {title: 'Blank page', subTitle: 'it all starts here'},
        }},
      { path: 'pace', component: PacePageComponent,
        data: {
          page: {title: 'Pace page', subTitle: 'Loading example'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
