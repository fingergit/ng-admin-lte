import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltColorPaletteComponent } from './alt-color-palette.component';

describe('AltColorPaletteComponent', () => {
  let component: AltColorPaletteComponent;
  let fixture: ComponentFixture<AltColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltColorPaletteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
