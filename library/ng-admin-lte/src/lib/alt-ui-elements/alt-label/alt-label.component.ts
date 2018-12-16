import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {AltBgColor} from 'ng-admin-lte';

@Component({
  selector: '[alt-label]',
  templateUrl: './alt-label.component.html',
  styleUrls: ['./alt-label.component.scss']
})
export class AltLabelComponent extends AltUiComponent implements OnInit {

  _altColor: AltBgColor|string;
  @Input()
  set altColor(color: AltBgColor|string) {
    this._altColor = color;
    this.addClass(`label-${color}`);
  }

  get altColor(): AltBgColor | string {return this._altColor; }

  constructor(protected elementRef: ElementRef,
              protected render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('label');
  }

}
