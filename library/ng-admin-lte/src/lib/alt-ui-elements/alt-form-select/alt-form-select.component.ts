import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-form-select]',
  templateUrl: './alt-form-select.component.html',
  styleUrls: ['./alt-form-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltFormSelectComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altTitle: string;
  @Input() altMultiple: boolean;
  @Input() altSelect2 = false;
  @Input() altPlaceHolder: string;
  @ViewChild('selectElem')selectElem: ElementRef;
  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('form-group');
  }

  ngAfterViewInit(): void {
    this.render.setProperty(this.selectElem.nativeElement, 'disabled', this.altDisabled);
    this.render.setProperty(this.selectElem.nativeElement, 'multiple', this.altMultiple);
    if (this.altSelect2) {
      this.render.addClass(this.selectElem.nativeElement, 'select2');
      this.render.setStyle(this.selectElem.nativeElement, 'width', '100%;');
      this.render.setAttribute(this.selectElem.nativeElement, 'data-placeholder', this.altPlaceHolder);

      $('.select2').select2();
    }
  }

}
