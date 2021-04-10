import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';
import { JsonReader } from "../JsonReader.service";
import { State } from "./state.model";

@Injectable()
export class StateRestService {
    private states: State[];
    constructor(private http: HttpClient,
                private jsonReader: JsonReader) {}

    public getStatesName() {
        return this.http
                .get(this.jsonReader.getJsonAttrib("statesList"))
                .pipe(map((responseData) => {
                    let statesList = [];
                    for(const i in responseData) {
                        statesList.push(responseData[i]);
                    }
                    
                    return statesList;
                }))
    }

    public getStateInfos(stateName: string) {
        return this.http
                .get(this.jsonReader.getJsonAttrib("stateInfosLink") + stateName + this.jsonReader.getJsonAttrib("stateInfosParams"))
                .pipe(map((responseData) => {
                    let stateInfos = {
                        "capital": responseData[0].capital,
                        "currency": responseData[0].currencies[0].name,
                        "borders": "",
                        "region": responseData[0].region,
                        "language": responseData[0].languages[0].name,
                        population: responseData[0].population
                    };

                    return stateInfos;
                }))
    }

    public getSavedStates() {
        return this.http
            .get(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndStatesList"))
            .pipe(map((responseData) => {
                this.states = [];
                for(const i in responseData) {
                    this.states.push(new State(responseData[i].idState, responseData[i].stateName, null, ''));
                }

                return this.states;
            }))
    }

    public addStatePost(state: string) {
        
        return this.http
            .post(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndStatesList"),
            {"stateName": state})
            .pipe(map((res) => {
            }));
    }

    public deleteState(id: number) {
        return this.http
            .delete(this.jsonReader.getJsonAttrib("backEndBaseUrl") + 
                this.jsonReader.getJsonAttrib("backEndStatesList") + 
                "/" + id.toString(),
                { responseType: 'text'});
    }

    public findAllStatesWithRegions() {
        return this.http
            .get(this.jsonReader.getJsonAttrib("backEndBaseUrl") + this.jsonReader.getJsonAttrib("backEndStatesList") + 
                this.jsonReader.getJsonAttrib("findAllStatesWithRegions"))
                // .pipe(map((responseData) => {
                //     let statesList = [];
                //     for(const i in responseData) {
                //         statesList.push(responseData[i]);
                //     }
                    
                //     return statesList;
                // }))
    }

}