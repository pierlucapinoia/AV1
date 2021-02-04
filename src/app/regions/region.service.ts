import { EventEmitter } from "@angular/core";
import { City } from "../cities/cities.model";
import { Region } from "./region.model";

export class RegionService {
    
    private regions: Region[] = [
        new Region('Emilia-Romagna', [
            new City('Piacenza', 100000)
        ]),
        new Region('Lombardia', [
            new City('Milano', 1000000)
        ])
    ];
    regionSelected = new EventEmitter<Region>();

    getRegions() {
        return this.regions.slice();
    }
}