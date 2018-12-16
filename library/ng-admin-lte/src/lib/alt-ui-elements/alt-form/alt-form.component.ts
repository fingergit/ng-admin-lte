import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {AltButtonColor} from '../../model/alt-color';

@Component({
  selector: '[alt-form]',
  templateUrl: './alt-form.component.html',
  styleUrls: ['./alt-form.component.scss']
})
export class AltFormComponent extends AltUiComponent implements OnInit {

  @Input() altSubmitColor: AltButtonColor = AltButtonColor.PRIMARY;
  @Input() altSubmitTitle;
  @Input() altNoFooter = false;

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.render.setAttribute(this.el, 'role', 'form');
  }

}
