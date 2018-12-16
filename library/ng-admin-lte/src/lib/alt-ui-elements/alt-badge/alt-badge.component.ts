import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {AltBgColor, AltColor} from 'ng-admin-lte';

// <span class="badge bg-green">300</span>
// <span alt-badge altColor="yellow">3</span>
@Component({
  selector: '[alt-badge]',
  templateUrl: './alt-badge.component.html',
  styleUrls: ['./alt-badge.component.scss']
})
export class AltBadgeComponent extends AltUiComponent implements OnInit {

  _altColor: AltBgColor|string;
  @Input()
  set altColor(color: AltBgColor|string) {
    this._altColor = color;
    this.addClass(`bg-${color}`);
  }

  get altColor(): AltBgColor | string {return this._altColor; }

  constructor(protected elementRef: ElementRef,
              protected render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.addClass('badge');
  }

}
