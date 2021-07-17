
import { City } from "./cities.model";
import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { CityRestService } from "./cityRest.service";

@Injectable()
export class CityService {
    citiesChanged = new BehaviorSubject(false);
    startedEditing = new Subject<number>();
    private cities: City[];

    constructor(private cityRestService: CityRestService) {}

    getCities() {
        this.cities = [];
        this.cityRestService.getCities()
                .subscribe((response) => {
                    for (const i in response) {
                        this.cities.push(new City(response[i].idCity, response[i].cityName));
                    }
                });
        return this.cities;
    }

    getCity(index: number) {
        return this.cities[index];
    }

    addCity(cityName: String) {
        console.log("FSAJHFDKASJHDKJ")
        this.cityRestService.addCity(cityName)
                .subscribe(() => {
                    this.citiesChanged.next(true);
                })
    }

    updateCity(index: number, newCity: City) {
        this.cities[index] = newCity;
        // this.citiesChanged.next(this.cities.slice());
    }

    deleteCity(index: number) {
        this.cities.splice(index, 1);
        // this.citiesChanged.next(this.cities.slice());
    }
}