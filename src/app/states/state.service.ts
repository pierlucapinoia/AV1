import { EventEmitter } from "@angular/core";
import { State } from "./state.model";

export class StateService {
    private states: State[] = [
        new State('Italy'),
        new State('France')
    ];

    stateSelected = new EventEmitter<State>();

    getStates() {
        //slice ritorna un'esatta copia dell'array
        //In javascript è passato il riferimento, quindi la modifica di
        //questo array in states-list, andrebbe a modificare anche quello in questo servizio
        return this.states.slice();
    }
}