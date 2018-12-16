import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormRadioComponent } from './alt-form-radio.component';

describe('AltFormRadioComponent', () => {
  let component: AltFormRadioComponent;
  let fixture: ComponentFixture<AltFormRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
