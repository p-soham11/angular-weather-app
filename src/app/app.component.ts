import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;
  // Default city is set to Kolkata
  city: string = 'Kolkata';

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city = '';
  }
  title = 'weatherApp';

  onSubmit() {
    this.getWeatherData(this.city);
    this.city = '';
  }

  getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
