import { Component } from '@angular/core';

interface Citie {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridColsBreakpoint: number = 2;
  gridRowsBreakpoint: string = '4:1';
  selectedCity = 'salvador';
  cities: Citie[] = [
    { value: 'rio', viewValue: 'Rio de Janeiro' },
    { value: 'bh', viewValue: 'Belo Horizonte' },
    { value: 'paris', viewValue: 'Paris' },
    { value: 'ny', viewValue: 'Nova York' },
  ];
  weathers = [
    {
      city: 'Londres',
      temp: '4ºC',
    },
    {
      city: 'São Paulo',
      temp: '21ºC',
    },
    {
      city: 'Buenos Aires',
      temp: '16ºC',
    },
    {
      city: 'Tokyo',
      temp: '19ºC',
    },
    {
      city: 'Salvador',
      temp: '31ºC',
    },
  ];

  ngOnInit() {
    this.gridColsBreakpoint = window.innerWidth <= 600 ? 1 : 2;
    this.gridRowsBreakpoint = window.innerWidth <= 600 ? '2:1' : '4:1';
  }

  removeCity(city: string) {
    this.weathers = this.weathers.filter((w) => w.city !== city);
    // this.cities.push({ value: '' });
  }
}
