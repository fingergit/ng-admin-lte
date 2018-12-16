import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormSelectComponent } from './alt-form-select.component';

describe('AltFormSelectComponent', () => {
  let component: AltFormSelectComponent;
  let fixture: ComponentFixture<AltFormSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
