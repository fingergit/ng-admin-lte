import {Component, Input, OnInit} from '@angular/core';
import {AltColor} from '../../model/alt-color';
import {AltSmallBoxData} from '../../model/alt-small-box-data';

@Component({
  selector: 'alt-small-box',
  templateUrl: './alt-small-box.component.html',
  styleUrls: ['./alt-small-box.component.scss']
})
export class AltSmallBoxComponent implements OnInit {
  @Input() altBoxData: AltSmallBoxData = {
    text: '',
    icon: 'cube',
    color: AltColor.INFO,
    linkText: 'More info'
  };

  constructor() { }

  ngOnInit() {
  }

}
