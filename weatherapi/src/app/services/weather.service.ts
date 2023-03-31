import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, Subject } from 'rxjs';
import { Weather } from '../models';

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "API_Key";

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  onWeather = new Subject<Weather[]>;

  //Method to make an HTTP GET request to the OpenWeatherMap API
  //Returns an Observable of an array of Weather object
  //https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid={API_Key}
  getWeatherURL(city: string): Observable<Weather[]> {
    const params = new HttpParams()
        .set("q", city)
        .set("units", "metric")
        .set("appid", APPID);
    return this.http.get<Weather[]>(WEATHER_URL, { params });
  }

  //Method to retrieve "weather" data and cast to Weather[]
  //Emit the Weather[] data to subscribers of onWeather subject
  getWeatherData(city: string): Promise<Weather[]> {
    return firstValueFrom(
      this.getWeatherURL(city)
    )
    .then((data: any) => {
      const w = data["weather"] as Weather[];
      return w;
    })
    .then(w => {
      this.onWeather.next(w);
      return w;
    })
  }

}