import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltInfoBoxComponent } from './alt-info-box/alt-info-box.component';
import { AltSmallBoxComponent } from './alt-small-box/alt-small-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [AltInfoBoxComponent, AltSmallBoxComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AltInfoBoxComponent, AltSmallBoxComponent]
})
export class AltWidgetsModule { }
