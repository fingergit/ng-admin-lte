import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourOFourErrorComponent } from './four-o-four-error.component';

describe('FourOFourErrorComponent', () => {
  let component: FourOFourErrorComponent;
  let fixture: ComponentFixture<FourOFourErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourOFourErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourOFourErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
