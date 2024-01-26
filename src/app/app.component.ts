import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  selectedCountrySvgId: string = '';
  selectedCountryCapital: string = '';
  selectedCountryRegion: string = '';
  selectedCountryIncome: string = '';
  selectedCountryLongitude: string = '';
  selectedCountryLatitude: string = '';
  

  onSvgIdSelected(svgId: string) {
    this.selectedCountrySvgId = svgId;
  }

  onCapitalSelected(capital: string) {
    this.selectedCountryCapital = capital;
  }
  
  onRegionSelected(region: string) {
    this.selectedCountryRegion = region;
  }

  onIncomeSelected(incomeId: string) {
    this.selectedCountryIncome = incomeId;
  }

  onLongitudeSelected(longitude: string) {
    this.selectedCountryLongitude = longitude;
  }

  onLatitudeSelected(latitude: string) {
    this.selectedCountryLatitude = latitude;
  }

}