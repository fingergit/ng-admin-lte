import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-box-footer]',
  templateUrl: './alt-box-footer.component.html',
  styleUrls: ['./alt-box-footer.component.scss']
})
export class AltBoxFooterComponent extends AltUiComponent implements OnInit {

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('box-footer');
  }
}
