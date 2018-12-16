import {Component, Input, OnInit} from '@angular/core';
import {AltColorName} from '../../model/alt-color';

export interface AltColorPaletteData {
  name: AltColorName;
  color: string;
  colorValue: string;
}

@Component({
  selector: 'alt-color-palette',
  templateUrl: './alt-color-palette.component.html',
  styleUrls: ['./alt-color-palette.component.scss']
})
export class AltColorPaletteComponent implements OnInit {
  _altColor: AltColorPaletteData;
  @Input() set altColor(color: AltColorName) {
    switch (color) {
      case AltColorName.PRIMARY:
        this._altColor = {name: AltColorName.PRIMARY, color: 'light-blue', colorValue: '#3c8dbc'};
        break;
      case AltColorName.INFO:
        this._altColor = {name: AltColorName.INFO, color: 'aqua', colorValue: '#00c0ef'};
        break;
      case AltColorName.SUCCESS:
        this._altColor = {name: AltColorName.SUCCESS, color: 'green', colorValue: '#00a65a'};
        break;
      case AltColorName.WARNING:
        this._altColor = {name: AltColorName.WARNING, color: 'yellow', colorValue: '#f39c12'};
        break;
      case AltColorName.DANGER:
        this._altColor = {name: AltColorName.DANGER, color: 'red', colorValue: '#f56954'};
        break;
      case AltColorName.GRAY:
        this._altColor = {name: AltColorName.GRAY, color: 'gray', colorValue: '#d2d6de'};
        break;
      case AltColorName.NAVY:
        this._altColor = {name: AltColorName.NAVY, color: 'navy', colorValue: '#001F3F'};
        break;
      case AltColorName.TEAL:
        this._altColor = {name: AltColorName.TEAL, color: 'teal', colorValue: '#39CCCC'};
        break;
      case AltColorName.PURPLE:
        this._altColor = {name: AltColorName.PURPLE, color: 'purple', colorValue: '#605ca8'};
        break;
      case AltColorName.ORANGE:
        this._altColor = {name: AltColorName.ORANGE, color: 'orange', colorValue: '#ff851b'};
        break;
      case AltColorName.MAROON:
        this._altColor = {name: AltColorName.MAROON, color: 'maroon', colorValue: '#D81B60'};
        break;
      case AltColorName.BLACK:
        this._altColor = {name: AltColorName.BLACK, color: 'black', colorValue: '#111111'};
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
