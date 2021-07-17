import { Injectable } from "@angular/core";
import * as data from './endpoints.json';

@Injectable()
export class JsonReader {

    constructor () {}

    public getJsonAttrib(name: string){
        switch (name) {
            case "statesList":
                return data.statesList;
            case "stateInfosLink":
                return data.stateInfosLink;
            case "stateInfosParams":
                return data.stateInfosParams;
            case "backEndBaseUrl":
                return data.backEndBaseUrl;
            case "backEndStatesList":
                return data.backEndStatesList;
            case "backEndRegionsList":
                return data.backEndRegionsList;
            case "regionsByState":
                return data.regionsByState;
            case "findAllStatesWithRegions":
                return data.findAllStatesWithRegions;
            case "backEndCitiesList":
                return data.backEndCitiesList;
        }
    }
}