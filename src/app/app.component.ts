import { Component, ElementRef, ViewChild } from '@angular/core';
import OpenWeatherAPI from 'src/interfaces/openWeatherRes';
import { OpenWeatherApiService } from './open-weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridColsBreakpoint: number = 2;
  gridRowsBreakpoint: string = '4:1';
  weathers: OpenWeatherAPI[] = [];
  @ViewChild('inputCity') input!: ElementRef<HTMLInputElement>;

  constructor(private openWeatherApiService: OpenWeatherApiService) {}

  ngOnInit() {
    this.gridColsBreakpoint = window.innerWidth <= 600 ? 1 : 2;
    this.gridRowsBreakpoint = window.innerWidth <= 600 ? '2:1' : '4:1';
    ['Sao Paulo', 'Paris', 'Londres', 'Tokyo', 'Buenos Aires'].forEach(
      (city) => {
        this.addCity(city);
      }
    );
  }

  addCity(city: string) {
    this.openWeatherApiService.getWeatherInfos(city).subscribe({
      next: (v) => {
        const exists = this.weathers.find((c) => c.name === v.name);
        if (exists) {
          alert('Este local já foi adicionado.');
          return;
        }
        this.weathers.push({ name: v.name, main: v.main, sys: v.sys });
        this.input.nativeElement.value = '';
      },
      error: (err) => {
        alert('Local não encontrado.');
        console.error(err);
      },
    });
  }

  removeCity(city: string) {
    this.weathers = this.weathers.filter((w) => w.name !== city);
  }
}
