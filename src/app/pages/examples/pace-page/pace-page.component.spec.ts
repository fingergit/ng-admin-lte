import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacePageComponent } from './pace-page.component';

describe('PacePageComponent', () => {
  let component: PacePageComponent;
  let fixture: ComponentFixture<PacePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
