import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBoxTitleComponent } from './alt-box-title.component';

describe('AltBoxTitleComponent', () => {
  let component: AltBoxTitleComponent;
  let fixture: ComponentFixture<AltBoxTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltBoxTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltBoxTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
