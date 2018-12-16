import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../../alt-ui-elements/alt-ui-component';
import {AltFormSelectComponent} from '../../alt-ui-elements/alt-form-select/alt-form-select.component';

@Component({
  selector: 'alt-alt-select2',
  templateUrl: './alt-select2.component.html',
  styleUrls: ['./alt-select2.component.scss']
})
export class AltSelect2Component extends AltFormSelectComponent implements OnInit, AfterViewInit {

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

}
