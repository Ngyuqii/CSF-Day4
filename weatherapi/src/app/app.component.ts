import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder, private weatherSvc: WeatherService) {}

  form!: FormGroup;
  city = "";

  //Initialize a FormGroup with validation
  ngOnInit(): void {
    this.form = this.fb.group({
      city: this.fb.control("singapore", [ Validators.required ])
    })
  }

  //Retrieve city form value and pass as param into getWeatherData
  getWeather(): void {
    this.city = this.form.value.city;
    console.info(">>>City input: ", this.city);
    this.weatherSvc.getWeatherData(this.city);
  }

}