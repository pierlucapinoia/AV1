import { City } from "../cities/cities.model";

export class Region {
    
    constructor(public regionName: string, public cities: City[]){}
}