import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {AltUiComponent} from '../alt-ui-component';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {buffer, bufferCount, count, debounceTime, distinctUntilChanged, filter, map, scan, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'alt-search-box',
  templateUrl: './alt-search-box.component.html',
  styleUrls: ['./alt-search-box.component.scss']
})
export class AltSearchBoxComponent extends AltUiComponent implements OnInit, AfterViewInit {

  @Input() altPlaceholder = 'Search';
  @Input() altStyle: Object;
  _altText = '';
  @Input() set altText(text: string) {
    this._altText = text;
    this.changeEvent$.next(text);
  }

  @Output() altOnSearch = new EventEmitter<string>();
  @Output() altOnChange = new EventEmitter<string>();

  @ViewChild('searchGroup') searchGroup: ElementRef;

  changeEvent$ = new BehaviorSubject<string>('');

  constructor(elementRef: ElementRef, render: Renderer2) { super(elementRef, render); }

  ngOnInit() {
    this.render.setStyle(this.searchGroup.nativeElement, 'width', '150px');
    this.changeEvent$.pipe(debounceTime(1000), distinctUntilChanged()
    )
      .subscribe(text => {
        this.altOnChange.emit(text);
      });
  }

  ngAfterViewInit(): void {
  }

  onInputChange(event: KeyboardEvent) {
    const text = event.target['value'];
  }

  onSearch(text: string) {
    // this.altOnSearch.emit(this._altText);

    const ob$ = from([1, 2, 3, 4]).pipe(map(v => v * 10), bufferCount(2));
    ob$.subscribe(v => console.log(v));
  }
}
