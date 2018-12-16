import {ElementRef, Input, Renderer2} from '@angular/core';

export class AltUiComponent {

  @Input() altDisabled = false;

  protected el: HTMLElement = this.elementRef.nativeElement;

  //   constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }
  constructor(protected elementRef: ElementRef,
              protected render: Renderer2) {}

  protected addRemoveClass(className: string, add: boolean) {
    if (add) {
      this.render.addClass(this.el, className);
    } else {
      this.render.removeClass(this.el, className);
    }
  }

  protected addClass(className: string | Array<string>) {
    this.parseClassNames(className).forEach(name => {
        this.addRemoveClass(name, true);
    });
  }

  protected removeClass(className: string | Array<string>) {
    this.parseClassNames(className).forEach(name => {
      this.addRemoveClass(name, false);
    });
  }

  private parseClassNames(className: string | Array<string>): Array<string> {
    if (className instanceof Array) {
      return className;
    }
    return className.split(' ');
  }
}
