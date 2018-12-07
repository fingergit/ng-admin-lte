import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineChartsComponent } from './inline-charts.component';

describe('InlineChartsComponent', () => {
  let component: InlineChartsComponent;
  let fixture: ComponentFixture<InlineChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
