import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltDataTableComponent } from './alt-data-table.component';

describe('AltDataTableComponent', () => {
  let component: AltDataTableComponent;
  let fixture: ComponentFixture<AltDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
