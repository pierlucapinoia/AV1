import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JsonReader } from '../JsonReader.service';
import { StateService } from '../states/state.service';
import { StateRestService } from '../states/stateRest.service';
import { City } from './cities.model';
import { CityService } from './city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [StateService, JsonReader, StateRestService]
})
export class CitiesComponent implements OnInit {
  cities: City[];
  private subscription: Subscription;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cities = this.cityService.getCities();
    this.subscription = this.cityService.citiesChanged
                        .subscribe(
                          (cities: City[]) => {
                            this.cities = cities;
                          }
                        )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditCity(index: number) {
    this.cityService.startedEditing.next(index);
  }

}
