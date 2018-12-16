import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-box-title]',
  templateUrl: './alt-box-title.component.html',
  styleUrls: ['./alt-box-title.component.scss']
})
export class AltBoxTitleComponent extends AltUiComponent implements OnInit {

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('box-title');
  }

}
