import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleTablesComponent} from './simple-tables/simple-tables.component';
import {DataTablesComponent} from './data-tables/data-tables.component';
import {CalendarComponent} from '../calendar/calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'simple', component: SimpleTablesComponent,
        data: {
          page: {title: 'Data Tables', subTitle: 'advanced tables'},
        }},
      {path: 'data', component: DataTablesComponent,
        data: {
          page: {title: 'Simple Tables', subTitle: 'preview of simple tables'},
        }},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
