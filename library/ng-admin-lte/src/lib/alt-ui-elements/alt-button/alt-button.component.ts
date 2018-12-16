import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {AltSize} from '../../model/alt-size';
import {AltButtonColor} from '../../model/alt-color';

@Component({
  selector: '[alt-button]',
  templateUrl: './alt-button.component.html',
  styleUrls: ['./alt-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltButtonComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() altSize: AltSize|string = AltSize.NORMAL;
  @Input() altFlat = false;
  @Input() altColor = AltButtonColor.DEFAULT;
  @Input() altDisabled = false;
  @Input() altBlock = false;
  @Input() altTitle: string;
  @Input() altIcon: string;

  private el: HTMLElement = this.elementRef.nativeElement;

  constructor(private elementRef: ElementRef,
              private render: Renderer2,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.addRemoveClass('btn', true);
    this.updateStyle();
  }

  ngAfterViewInit(): void {
    this.updateStyle();
  }

  updateStyle() {
    this.addRemoveClass('btn-flat', this.altFlat);
    this.addRemoveClass('disabled', this.altDisabled);

    if (this.altSize) {
      this.addRemoveClass(`btn-${this.altSize}`, true);
    }
    this.addRemoveClass(`btn-block`, this.altBlock );
    this.addRemoveClass(`btn-${this.altColor}`, true);

    // this.changeDetectorRef.detectChanges();
  }

  addRemoveClass(className: string, add: boolean) {
    if (add) {
      this.render.addClass(this.el, className);
    } else {
      this.render.removeClass(this.el, className);
    }
  }

  ngAfterContentInit(): void {
    // this.updateStyle();
  }
}
