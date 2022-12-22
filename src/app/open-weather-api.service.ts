import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { openWeatherApiKey } from 'src/environment/openWeather';
import OpenWeatherAPIRes from 'src/interfaces/openWeatherRes';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherApiService {
  constructor(private http: HttpClient) {}

  getWeatherInfos(localName: string) {
    return this.http.get<OpenWeatherAPIRes>(
      `https://api.openweathermap.org/data/2.5/weather?q=${localName}&units=metric&appid=${openWeatherApiKey}`
    );
  }
}
