import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltBoxFooterComponent } from './alt-box-footer.component';

describe('AltBoxFooterComponent', () => {
  let component: AltBoxFooterComponent;
  let fixture: ComponentFixture<AltBoxFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltBoxFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltBoxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
