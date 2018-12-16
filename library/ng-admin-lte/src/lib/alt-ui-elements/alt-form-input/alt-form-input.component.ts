import {AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {AltSize} from '../../model/alt-size';
import {AltButtonColor} from '../../model/alt-color';

@Component({
  selector: '[alt-form-input]',
  templateUrl: './alt-form-input.component.html',
  styleUrls: ['./alt-form-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AltFormInputComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altHorizontal = false;
  @Input() altTitle: string;
  @Input() altType = 'text';
  @Input() altPlaceHolder: string;
  @Input() altId: string;
  @Input() altFormGroup = true;
  @Input() altSize: AltSize = AltSize.NORMAL;
  @Input() altInputGroupSize = AltSize.NORMAL; // when altInputGroup is true
  @Input() altDisabled = false;
  @Input() altInputResult: string; // success, warning, error
  _altPre: string;
  _altPost: string;
  _altPreIcon: string;
  _altPostIcon: string;
  _altPreCheckbox: boolean;
  _altPreRadio: boolean;
  _altPreButton: string;
  _altPreButtonColor: AltButtonColor;
  _altPostButton: string;
  _altPostButtonColor: AltButtonColor;
  _altPostButtonFlat: boolean;
  @Input()
  set altPre(pre: string) {
    this._altPre = pre;
    this.setInputGroup();
  }

  @Input()
  set altPost(post: string) {
    this._altPost = post;
    this.setInputGroup();
  }

  @Input()
  set altPreIcon(icon: string) {
    this._altPreIcon = icon;
    this.setInputGroup();
  }

  @Input()
  set altPostIcon(icon: string) {
    this._altPostIcon = icon;
    this.setInputGroup();
  }

  @Input()
  set altPreCheckbox(check: boolean) {
    this._altPreCheckbox = check;
    this.setInputGroup();
  }

  @Input()
  set altPreRadio(check: boolean) {
    this._altPreRadio = check;
    this.setInputGroup();
  }

  @Input()
  set altPreButton(title: string) {
    this._altPreButton = title;
    this.setInputGroup();
  }

  @Input()
  set altPreButtonColor(color: AltButtonColor) {
    this._altPreButtonColor = color;
    this.setInputGroup();
  }

  @Input()
  set altPostButton(title: string) {
    this._altPostButton = title;
    this.setInputGroup();
  }

  @Input()
  set altPostButtonColor(color: AltButtonColor) {
    this._altPostButtonColor = color;
  }

  @Input()
  set altPostButtonFlat(flat: boolean) {
    this._altPostButtonFlat = flat;
    if (!this.postButton) { return; }
    if (flat) {
      this.render.addClass(this.postButton.nativeElement, 'btn-flat');
    } else {
      this.render.removeClass(this.postButton.nativeElement, 'btn-flat');
    }
  }

  @ViewChild('postButton') postButton: ElementRef;
  @ViewChild('labelElem') labelElem: ElementRef;
  @ViewChild('inputElem') inputElem: ElementRef;
  @ViewChild('resultIcon') resultIconItem: ElementRef;

  hasPre() {
    return this._altPre || this._altPreIcon || this._altPreCheckbox !== undefined ||
      this._altPreRadio !== undefined;
  }

  hasPost() {
    return this._altPost || this._altPostIcon;
  }

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    if (this.altFormGroup) {
      this.addClass('form-group');
      if (this.altInputResult) {
          this.addClass(`has-${this.altInputResult}`);
      }
    }
  }

  ngAfterViewInit(): void {
    this.altPostButtonFlat = this._altPostButtonFlat;
    if (this.altHorizontal && this.labelElem) {
      this.render.addClass(this.labelElem.nativeElement, 'control-label');
    }
    if (this.inputElem) {
      this.render.setProperty(this.inputElem.nativeElement, 'disabled', this.altDisabled);
    }
    if (this.altInputResult && this.resultIconItem) {
      switch (this.altInputResult) {
        case 'success': this.render.addClass(this.resultIconItem.nativeElement, 'fa-check'); break;
        case 'warning': this.render.addClass(this.resultIconItem.nativeElement, 'fa-bell-o'); break;
        case 'error': this.render.addClass(this.resultIconItem.nativeElement, 'fa-times-circle-o'); break;
      }
    }
  }

  private setInputGroup() {
    this.addClass('input-group');
    if (this.altInputGroupSize !== AltSize.NORMAL) {
      this.addClass(`input-group-${this.altInputGroupSize}`);
    }
  }

}
