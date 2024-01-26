import { Component, OnInit, Input } from '@angular/core';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-map-information',
  templateUrl: './map-data.component.html',
  styleUrls: ['./map-data.component.css']
})

export class MapInformationComponent implements OnInit {
  @Input() countryId!: string;
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncome!: string;
  @Input() countryLongitude!: string;
  @Input() countryLatitude!: string;
  constructor() { }

  ngOnInit(): void { }
}