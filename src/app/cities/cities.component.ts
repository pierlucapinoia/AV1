import { Component, OnInit } from '@angular/core';
import { City } from './cities.model';
import { CityService } from './city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[];
  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    this.cityService.citiesChanged
    .subscribe(
      (cities: City[]) => {
        this.cities = cities;
      }
    )
  }

}
