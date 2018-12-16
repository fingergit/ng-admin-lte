import {Component, Input, OnInit} from '@angular/core';
import {AltColor} from '../../model/alt-color';
import {AltInfoBoxData} from '../../model/alt-info-box-data';

@Component({
  selector: 'alt-info-box',
  templateUrl: './alt-info-box.component.html',
  styleUrls: ['./alt-info-box.component.scss']
})
export class AltInfoBoxComponent implements OnInit {

  _altBoxData: AltInfoBoxData = {
    text: '',
    icon: 'cube',
    color: AltColor.INFO
  };

  fullBkColor = '';
  bkColor = '';

  @Input()
  set altBoxData(data: AltInfoBoxData) {
    this._altBoxData = data;
    if (data.fullColor) {
      this.fullBkColor = 'bg-' + data.color;
      this.bkColor = '';
    } else {
      this.fullBkColor = '';
      this.bkColor = 'bg-' + data.color;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
