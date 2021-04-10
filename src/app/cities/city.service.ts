
import { City } from "./cities.model";
import { Subject } from 'rxjs';

export class CityService {
    citiesChanged = new Subject<City[]>();
    startedEditing = new Subject<number>();
    private cities: City[] = [
        new City('Piacenza')
    ];

    getCities() {
        return this.cities.slice();
    }

    getCity(index: number) {
        return this.cities[index];
    }

    addCity(city: City) {
        this.cities.push(city);
        this.citiesChanged.next(this.cities.slice());
    }

    updateCity(index: number, newCity: City) {
        this.cities[index] = newCity;
        this.citiesChanged.next(this.cities.slice());
    }

    deleteCity(index: number) {
        this.cities.splice(index, 1);
        this.citiesChanged.next(this.cities.slice());
    }
}