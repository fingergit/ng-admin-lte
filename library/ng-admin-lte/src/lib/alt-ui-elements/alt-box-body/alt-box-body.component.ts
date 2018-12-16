import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-box-body]',
  templateUrl: './alt-box-body.component.html',
  styleUrls: ['./alt-box-body.component.scss']
})
export class AltBoxBodyComponent extends AltUiComponent implements OnInit {

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('box-body');
  }
}
