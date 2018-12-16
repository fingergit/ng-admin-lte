import {Component, Input, OnInit} from '@angular/core';
import {AltBoxData} from '../../model/alt-box-data';
import {AltColor} from '../../model/alt-color';

@Component({
  selector: 'alt-box',
  templateUrl: './alt-box.component.html',
  styleUrls: ['./alt-box.component.scss'],
})
export class AltBoxComponent implements OnInit {

  _altBoxData: AltBoxData = { title: '' };
  @Input() set altBoxData(data: AltBoxData) {
    this._altBoxData = data;
    if (data.title) {
      this.altTitle = data.title;
    }
    if (data.customHeader) {
      this.altCustomHeader = data.customHeader;
    }
    if (data.withoutBorder) {
      this.altWithoutBorder = data.withoutBorder;
    }
    if (data.color) {
      this.altColor = data.color;
    }
    if (data.removable) {
      this.altRemovable = data.removable;
    }
    if (data.collapsible) {
      this.altCollapsible = data.collapsible;
    }
  }

  get altBoxData() { return this._altBoxData; }

  @Input() altTitle;
  @Input() altWithoutBorder;
  @Input() altColor = AltColor.DEFAULT;
  @Input() altLoading: boolean;
  @Input() altCollapsed: boolean;
  @Input() altCustomHeader = false;
  @Input() altCustomBody = false;
  @Input() altRemovable = false;
  @Input() altCollapsible = false;
  @Input() altHasFooter = false;
  @Input() altFooterClass: string;
  @Input() altNoPadding = false;

  constructor() { }

  ngOnInit() {
  }

}
