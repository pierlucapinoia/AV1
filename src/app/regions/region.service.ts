import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Region } from "./region.model";
import { RegionRestService } from "./regionRest.service";

@Injectable()
export class RegionService {
    
    private regions: Region[];
    regionSelected = new EventEmitter<Region>();
    needUpdate : BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private regionRestService: RegionRestService) {}

    getRegions() {
        this.regions = [];
        return this.regions.slice();
    }

    getRegionsByStateId(idState: Number) {
        this.regions = [];
        this.regionRestService.getRegionsByStateId(idState)
                .subscribe((responseData) => {
                    responseData.forEach(element => this.regions.push(element));
                });
        return this.regions;      
    }

    getRegionById(index: number) {
        return this.regions.slice()[index];
    }

    addRegion(idState: number, stateName: String, regionName: String) {
        this.regionRestService.addRegionPost(idState, stateName, regionName)
            .subscribe((res) => this.needUpdate.next(true));
    }

    deleteRegion(idRegion: number) {
        this.regionRestService.deleteRegionById(idRegion)
        .subscribe((res: String) => {
            this.needUpdate.next(true);
        })
    }
}