import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBadgeComponent } from './alt-badge.component';

describe('AltBadgeComponent', () => {
  let component: AltBadgeComponent;
  let fixture: ComponentFixture<AltBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
