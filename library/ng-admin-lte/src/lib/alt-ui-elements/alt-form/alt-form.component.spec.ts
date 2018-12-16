import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFormComponent } from './alt-form.component';

describe('AltFormComponent', () => {
  let component: AltFormComponent;
  let fixture: ComponentFixture<AltFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
