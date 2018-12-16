import {Component, OnInit} from '@angular/core';
import {AltBoxData, AltColor, AltColorName} from 'ng-admin-lte';

@Component({
  selector: 'alt-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  colorPallete: AltBoxData = {title: '', color: AltColor.INFO, customHeader: true};
  colorNames = [
    [
      AltColorName.PRIMARY, AltColorName.INFO, AltColorName.SUCCESS, AltColorName.WARNING, AltColorName.DANGER,
      AltColorName.GRAY
    ],
    [
      AltColorName.NAVY, AltColorName.TEAL, AltColorName.PURPLE, AltColorName.ORANGE,
      AltColorName.MAROON, AltColorName.BLACK
    ]
  ];

  constructor() { }

  ngOnInit() {
  }

}
