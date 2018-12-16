import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBoxComponent } from './alt-box.component';

describe('AltBoxComponent', () => {
  let component: AltBoxComponent;
  let fixture: ComponentFixture<AltBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
