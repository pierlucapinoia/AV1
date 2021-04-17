import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JsonReader } from "../JsonReader.service";

export class RegionRestService {

    constructor(private http: HttpClient, private jsonReader: JsonReader) {}

    public getRegionsByStateId(idState: Number) {
        return this.http
                .get(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndRegionsList") + 
                this.jsonReader.getJsonAttrib("regionsByState") + idState.toString())
                .pipe(map((responseData) => {
                    let regionsList = [];
                    for(const i in responseData) {
                        regionsList.push(responseData[i]);
                    }            
                    return regionsList;
                }));
    }

    public addRegionPost(idState: number, stateName: String, regionName: String) {
        return this.http
            .post(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndRegionsList"), {
                "state": {
                    idState,
                    stateName
                },
                "regionName" : regionName
            })
            .pipe(map(() => {}));
    }

    public deleteRegionById(idRegion: number) {
        return this.http
            .delete(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndRegionsList")
                + "/" + idRegion.toString(),
                { responseType: 'text'});
    }

}