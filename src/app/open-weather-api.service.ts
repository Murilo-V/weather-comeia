import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { openWeatherApiKey } from 'src/environment/openWeather';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  constructor(private http: HttpClient) {}

  getWeatherInfos(localName?: string) {
    this.http
      .get<{ ok: string }>(
        `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${openWeatherApiKey}`
      )
      .subscribe({
        next: (v) => {
          console.log(v);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
