import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltButtonComponent } from './alt-button.component';

describe('AltButtonComponent', () => {
  let component: AltButtonComponent;
  let fixture: ComponentFixture<AltButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
