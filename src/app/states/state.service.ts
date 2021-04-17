import { Injectable, OnDestroy, resolveForwardRef } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { State } from "./state.model";
import { StateRestService } from "./stateRest.service";

@Injectable()
export class StateService {
    private states: State[];
    
    constructor (private stateRest: StateRestService) {}

    stateSelected = new Subject<State>();
    needUpdate : BehaviorSubject<boolean> = new BehaviorSubject(false);

    getStates() {
        //slice ritorna un'esatta copia dell'array
        //In javascript è passato il riferimento, quindi la modifica di
        //questo array in states-list, andrebbe a modificare anche quello in questo servizio
        this.states = [];
        this.stateRest.getSavedStates()
            .subscribe((response) => {
                for (const i in response) {
                    this.states.push(new State(response[i].idState, response[i].name, null, ''));
                }
            });
        return this.states;
    }

    getState(index: number){
        return this.states.slice()[index];
    }

    addState(state: string) {
        this.stateRest.addStatePost(state)
        .subscribe((res)=>{
            this.needUpdate.next(true);
        });
    }

    updateState(id: number, population: number) {
        return this.states.slice()[id];
    }

    deleteState(id: number) {
        this.stateRest.deleteState(id)
        .subscribe((res: String) => {
            this.needUpdate.next(true);
        })
    }

    findAllStatesWithRegions() {
        let statesWithRegions = [];
        this.stateRest.findAllStatesWithRegions()
            .subscribe((response) => {
                for (const i in response)
                    statesWithRegions.push(new State(response[i].idState, response[i].stateName, null, ''));
            })
        return statesWithRegions;
    }


}