import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormTextareaComponent } from './alt-form-textarea.component';

describe('AltFormTextareaComponent', () => {
  let component: AltFormTextareaComponent;
  let fixture: ComponentFixture<AltFormTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
