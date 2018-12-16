import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-form-single-checkbox]',
  templateUrl: './alt-form-single-checkbox.component.html',
  styleUrls: ['./alt-form-single-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltFormSingleCheckboxComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altHorizontal = false;
  @Input() altChecked = false;
  @Input() altDisabled = false;

  @ViewChild('checkboxElem') checkboxElem: ElementRef;
  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    if (!this.altHorizontal) {
      this.addClass('checkbox');
    } else {
      this.addClass('form-group');
    }
  }

  ngAfterViewInit(): void {
    this.render.setProperty(this.checkboxElem.nativeElement, 'checked', this.altChecked);
    this.render.setProperty(this.checkboxElem.nativeElement, 'disabled', this.altDisabled);
  }

}
