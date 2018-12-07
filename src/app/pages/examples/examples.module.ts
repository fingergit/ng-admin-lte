import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { FourOFourErrorComponent } from './four-o-four-error/four-o-four-error.component';
import { FiveOOErrorComponent } from './five-o-o-error/five-o-o-error.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { PacePageComponent } from './pace-page/pace-page.component';

@NgModule({
  declarations: [InvoiceComponent, ProfileComponent,
    LoginComponent, RegisterComponent, LockScreenComponent,
    FourOFourErrorComponent, FiveOOErrorComponent, BlankPageComponent, PacePageComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule
  ]
})
export class ExamplesModule { }
