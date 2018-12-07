import {AfterViewInit, Component, OnInit} from '@angular/core';
// need css and js
import {} from 'jquery';

@Component({
  selector: 'alt-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('.slider').slider();
  }

}
