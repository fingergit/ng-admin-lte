import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSelect2Component } from './alt-select2.component';

describe('AltSelect2Component', () => {
  let component: AltSelect2Component;
  let fixture: ComponentFixture<AltSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
