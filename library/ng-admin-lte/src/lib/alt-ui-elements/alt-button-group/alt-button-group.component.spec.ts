import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltButtonGroupComponent } from './alt-button-group.component';

describe('AltButtonGroupComponent', () => {
  let component: AltButtonGroupComponent;
  let fixture: ComponentFixture<AltButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
