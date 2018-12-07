import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InboxComponent} from './inbox/inbox.component';
import {ComposeComponent} from './compose/compose.component';
import {ReadComponent} from './read/read.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'mailbox', component: InboxComponent,
        data: {
          page: {title: 'Mailbox', subTitle: '13 new messages'},
        }},
      { path: 'compose', component: ComposeComponent,
        data: {
          page: {title: 'Mailbox', subTitle: '13 new messages'},
        }},
      { path: 'read-mail', component: ReadComponent,
        data: {
          page: {title: 'Read Mail'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailBoxRoutingModule { }
