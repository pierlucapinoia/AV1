import { City } from "../cities/cities.model";

export class Region {
    
    constructor(public idRegion: number, public regionName: string, public cities: City[]){}
}