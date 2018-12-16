import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltAppButtonComponent } from './alt-app-button.component';

describe('AltAppButtonComponent', () => {
  let component: AltAppButtonComponent;
  let fixture: ComponentFixture<AltAppButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltAppButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltAppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
