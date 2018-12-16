import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSmallBoxComponent } from './alt-small-box.component';

describe('AltSmallBoxComponent', () => {
  let component: AltSmallBoxComponent;
  let fixture: ComponentFixture<AltSmallBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSmallBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSmallBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
