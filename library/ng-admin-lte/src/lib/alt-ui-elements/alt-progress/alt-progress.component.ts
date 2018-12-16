import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'alt-progress',
  templateUrl: './alt-progress.component.html',
  styleUrls: ['./alt-progress.component.scss']
})
export class AltProgressComponent implements OnInit {

  @Input() altSize = 'xs'; // xs
  @Input() altActive;
  @Input() altColor; // primary, yellow, danger, success,
  @Input() altPercent;

  constructor() { }

  ngOnInit() {
  }

}
