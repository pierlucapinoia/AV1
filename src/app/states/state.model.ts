import { City } from "../cities/cities.model";
import { Region } from "../regions/region.model";

export class State {
    public idState: number;
    public name: string;
    public regions: Region[];
    public lengthOfStay: number;

    constructor(idState: number, name: string, regions: Region[], stateCapitalCity: string){
        this.idState = idState;
        this.name = name;
        this.regions = regions;
    }
}