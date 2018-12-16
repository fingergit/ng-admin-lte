import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltProgressComponent } from './alt-progress.component';

describe('AltProgressComponent', () => {
  let component: AltProgressComponent;
  let fixture: ComponentFixture<AltProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
