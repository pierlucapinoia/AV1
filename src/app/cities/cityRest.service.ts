import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JsonReader } from "../JsonReader.service";

export class CityRestService {

    constructor(private http: HttpClient, private jsonReader: JsonReader) {}

    public getCities() {
        return this.http
                .get(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndCitiesList"))
                .pipe(map((responseData) => {
                    let citiesList = [];
                    for(const i in responseData) {
                        citiesList.push(responseData[i]);
                    }
                    
                    return citiesList;
                }));
    }

    public addCity(cityName: String) {
        return this.http
                .post(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndCitiesList"), 
                {"region": {
                    
                },
                "cityName": cityName});
    }

}