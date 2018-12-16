import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormInputComponent } from './alt-form-input.component';

describe('AltFormInputComponent', () => {
  let component: AltFormInputComponent;
  let fixture: ComponentFixture<AltFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
