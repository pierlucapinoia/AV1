import { City } from "../cities/cities.model";

export class Region {
    constructor(public name: string, public cities: City[]){}
}