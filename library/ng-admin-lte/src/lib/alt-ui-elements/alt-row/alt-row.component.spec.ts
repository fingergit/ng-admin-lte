import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltRowComponent } from './alt-row.component';

describe('AltRowComponent', () => {
  let component: AltRowComponent;
  let fixture: ComponentFixture<AltRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
