import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {AltTableHeadData, AltTableRowData} from './alt-table-data';

@Component({
  selector: 'alt-table',
  templateUrl: './alt-table.component.html',
  styleUrls: ['./alt-table.component.scss']
})
export class AltTableComponent implements OnInit, AfterViewInit {

  @Input() altHeadData: AltTableHeadData;
  @Input() altDataSet: AltTableRowData[];
  @Input() altCondensed = false;
  @Input() altBordered = true;
  @Input() altStriped = false;
  @Input() altHover = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
