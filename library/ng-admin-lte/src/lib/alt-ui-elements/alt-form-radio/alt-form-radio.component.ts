import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';

@Component({
  selector: '[alt-form-radio]',
  templateUrl: './alt-form-radio.component.html',
  styleUrls: ['./alt-form-radio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltFormRadioComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altHorizontal = false;
  @Input() altChecked = false;
  @Input() altDisabled = false;
  @Input() altName: string;
  @Input() altValue: string;

  @ViewChild('radioElem') radioElem: ElementRef;

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    if (!this.altHorizontal) {
      this.addClass('radio');
    } else {
      this.addClass('form-group');
    }
  }

  ngAfterViewInit(): void {
    this.render.setProperty(this.radioElem.nativeElement, 'checked', this.altChecked);
    this.render.setProperty(this.radioElem.nativeElement, 'disabled', this.altDisabled);
  }


}
