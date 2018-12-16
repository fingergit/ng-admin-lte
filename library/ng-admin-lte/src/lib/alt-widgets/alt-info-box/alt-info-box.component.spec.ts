import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltInfoBoxComponent } from './alt-info-box.component';

describe('AltInfoBoxComponent', () => {
  let component: AltInfoBoxComponent;
  let fixture: ComponentFixture<AltInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltInfoBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
