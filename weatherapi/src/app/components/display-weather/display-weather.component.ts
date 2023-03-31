import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.css']
})

export class DisplayWeatherComponent implements OnInit, OnDestroy {

  constructor(private weatherSvc: WeatherService) {}

  weather: Weather[] = [];
  weatherSub!: Subscription;
  
  //Subscribe to the onWeather Observable and update the weather data
  ngOnInit(): void {
    console.info("Subscribing to weather");
    this.weatherSub = this.weatherSvc.onWeather.subscribe(
      (data) => this.weather = data
    );
  }

  //Unsubscribe to weatherSub
  ngOnDestroy(): void {
      this.weatherSub.unsubscribe();
  }

}
