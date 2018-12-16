import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSearchBoxComponent } from './alt-search-box.component';

describe('AltSearchBoxComponent', () => {
  let component: AltSearchBoxComponent;
  let fixture: ComponentFixture<AltSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
