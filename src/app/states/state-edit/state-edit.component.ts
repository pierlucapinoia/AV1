import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { StateService } from '../state.service';
import { StateRestService } from '../stateRest.service';

@Component({
  selector: 'app-state-edit',
  templateUrl: './state-edit.component.html',
  styleUrls: ['./state-edit.component.css']
})
export class StateEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  stateForm: FormGroup;
  statesList: string[];
  stateSelected = false;
  stateInfos: Object;
  selectState: any;

  constructor(private route: ActivatedRoute,
              private stateService: StateService,
              private stateRestService: StateRestService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      )

    this.stateRestService.getStatesName()
      .subscribe((response) => {
        this.statesList = response;
    });
  }

  onSubmit() {

    if(this.editMode)
      this.stateService.updateState(this.id, this.stateForm.get('population').value);
    else {
      this.stateService.addState(this.stateForm.value.name);
      this.selectState = "";
      this.onChangeSelect("");
    }
  }

  private initForm() {
    let stateName = '';
    let stateRegions = new FormArray([]);
    let statelengthOfStay = 0;
    let stateCapitalCity = '';
    let stateLanguage = '';
    let stateContinent = '';
    let stateCurrency = '';
    let statePopulation = 0;
    let stateBorders = '';
    
    if(this.editMode) {
      const state = this.stateService.getState(this.id);
      stateName = state.name;

      if(state['regions']) {
        for (let region of state.regions) {
          stateRegions.push(
            new FormGroup({
              'name': new FormControl(region.regionName),
              'cities': new FormControl(region.cities)
            })
          );
        }
      }

      statelengthOfStay = state.lengthOfStay;

    }

    this.stateForm = new FormGroup({
      'name': new FormControl(stateName),
      'regions': new FormControl({value:stateRegions, disabled:true}),
      'lengthOfStay': new FormControl({value:statelengthOfStay, disabled:true}),
      'stateCapitalCity': new FormControl({value:stateCapitalCity, disabled:true}),
      'language': new FormControl({value:stateLanguage, disabled:true}),
      'continent': new FormControl({value:stateContinent, disabled:true}),
      'currency': new FormControl({value:stateCurrency, disabled:true}),
      'population': new FormControl({value:statePopulation, disabled:true}),
      'borders': new FormControl({value:stateBorders, disabled:true})
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.stateForm.get('regions')).controls;
  }

  onChangeSelect(value: string) {
    if(value === "")
      this.stateSelected = false
    else {
      this.stateSelected = true;
      this.stateRestService.getStateInfos(value)
        .subscribe((response) => {
          this.stateForm.setValue({
            name: value,
            regions: null,
            lengthOfStay: 0,
            stateCapitalCity: response.capital,
            language: response.language,
            continent: response.region,
            currency: response.currency,
            population: response.population,
            borders: ""
          });
        })
    }
      
  }

  onCancelClick() {
    this.selectState = "";
    this.onChangeSelect("");
  }

  ngOnDestroy() {
    
  }

}
