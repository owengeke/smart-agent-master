import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyUnitsComponent } from './property-units.component';

describe('PropertyUnitsComponent', () => {
  let component: PropertyUnitsComponent;
  let fixture: ComponentFixture<PropertyUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
