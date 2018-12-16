import {Component, ElementRef, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

@Component({
  selector: '[alt-button-group]',
  templateUrl: './alt-button-group.component.html',
  styleUrls: ['./alt-button-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltButtonGroupComponent implements OnInit {

  el: HTMLElement;
  constructor(private elementRef: ElementRef,
              private render: Renderer2) { }

  ngOnInit() {
    this.el = this.elementRef.nativeElement;
    this.render.addClass(this.el, 'btn-group');
  }

}
