import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {AltBgColor} from 'ng-admin-lte';

@Component({
  selector: '[alt-app-button]',
  templateUrl: './alt-app-button.component.html',
  styleUrls: ['./alt-app-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltAppButtonComponent extends AltUiComponent implements OnInit {

  @Input() altIcon: string;
  @Input() altBadge: string;
  @Input() altBadgeColor: AltBgColor|string;

  constructor(protected elementRef: ElementRef,
              protected render: Renderer2) {super(elementRef, render); }

  ngOnInit() {
    this.addClass('btn btn-app');
  }
}
