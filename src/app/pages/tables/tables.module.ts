import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';

@NgModule({
  declarations: [SimpleTablesComponent, DataTablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
