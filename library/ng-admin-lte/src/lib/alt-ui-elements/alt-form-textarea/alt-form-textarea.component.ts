import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-form-textarea]',
  templateUrl: './alt-form-textarea.component.html',
  styleUrls: ['./alt-form-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltFormTextareaComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altHorizontal = false;
  @Input() altTitle: string;
  @Input() altDisabled = false;
  @Input() altPlaceHolder: string;
  @Input() altRows: string;

  @ViewChild('textareaElem') textareaElem: ElementRef;

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('form-group');
  }

  ngAfterViewInit(): void {
    if (this.textareaElem) {
      this.render.setProperty(this.textareaElem.nativeElement, 'disabled', this.altDisabled);
    }

  }

}
