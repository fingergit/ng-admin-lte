import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailBoxRoutingModule } from './mail-box-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [InboxComponent, ComposeComponent, ReadComponent],
  imports: [
    CommonModule,
    MailBoxRoutingModule
  ]
})
export class MailBoxModule { }
