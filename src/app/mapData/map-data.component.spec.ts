import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInformationComponent } from './map-data.component';

describe('MapInformationComponent', () => {
  let component: MapInformationComponent;
  let fixture: ComponentFixture<MapInformationComponent>;

  beforeAll(() => {
    TestBed.configureTestingModule({
      declarations: [MapInformationComponent]
    });
    fixture = TestBed.createComponent(MapInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});