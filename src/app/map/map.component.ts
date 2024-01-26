import { Component, Output,ElementRef, EventEmitter, ViewChild} from '@angular/core';
import { MapInformationComponent } from '../mapData/map-data.component';
import { countryService } from '../country.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(
    private elementRef: ElementRef,
    private countryApiService: countryService
    ) {}

  ngAfterViewInit() {
    const svgElement = this.elementRef.nativeElement.querySelector('svg');
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path: SVGPathElement) => {
      path.addEventListener('click', this.handleClick.bind(this));
    });
  }

  @Output() svgIdCountry = new EventEmitter<string>();
  @Output() incomeCountry = new EventEmitter<string>();
  @Output() capitalCountry = new EventEmitter<string>();
  @Output() longitudeCountry = new EventEmitter<string>();
  @Output() latitudeCountry = new EventEmitter<string>();
  @Output() regionCountry = new EventEmitter<string>();
  @ViewChild(MapInformationComponent)
private mapInformationComponent!: MapInformationComponent;

handleClick(event: MouseEvent) {
  const path = event.target as SVGPathElement;
  const countryId = path.id;


  this.countryApiService.getCountryInformation(countryId).subscribe((data: any) => {
    const countryName = data[1][0].name;
    const capitalCity = data[1][0].capitalCity;
    const region = data[1][0].region.value;
    const income = data[1][0].incomeLevel.value;
    const longitude = data[1][0].longitude;
    const latitude = data[1][0].latitude;

    this.svgIdCountry.emit(countryName);
    this.capitalCountry.emit(capitalCity);
    this.regionCountry.emit(region);
    this.incomeCountry.emit(income);
    this.longitudeCountry.emit(longitude);
    this.latitudeCountry.emit(latitude);

    
  });
}
}