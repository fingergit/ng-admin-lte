import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormSingleCheckboxComponent } from './alt-form-single-checkbox.component';

describe('AltFormSingleCheckboxComponent', () => {
  let component: AltFormSingleCheckboxComponent;
  let fixture: ComponentFixture<AltFormSingleCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormSingleCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormSingleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
