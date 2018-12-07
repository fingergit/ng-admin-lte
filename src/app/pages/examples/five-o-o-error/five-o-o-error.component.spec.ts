import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveOOErrorComponent } from './five-o-o-error.component';

describe('FiveOOErrorComponent', () => {
  let component: FiveOOErrorComponent;
  let fixture: ComponentFixture<FiveOOErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveOOErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveOOErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
