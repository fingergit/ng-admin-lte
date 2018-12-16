import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-row]',
  templateUrl: './alt-row.component.html',
  styleUrls: ['./alt-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltRowComponent extends AltUiComponent implements OnInit {

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('row');
  }
}
