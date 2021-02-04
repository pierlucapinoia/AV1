
import { EventEmitter } from "@angular/core";
import { City } from "./cities.model";

export class CityService {
    citiesChanged = new EventEmitter<City[]>();
    private cities: City[] = [
        new City('Piacenza', 100000)
    ];

    getCities() {
        return this.cities.slice();
    }

    addCity(city: City) {
        this.cities.push(city);
        this.citiesChanged.emit(this.cities.slice());
    }
}