import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBoxBodyComponent } from './alt-box-body.component';

describe('AltBoxBodyComponent', () => {
  let component: AltBoxBodyComponent;
  let fixture: ComponentFixture<AltBoxBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltBoxBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltBoxBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
