import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription, throwError } from 'rxjs';
import { Region } from 'src/app/regions/region.model';
import { RegionService } from 'src/app/regions/region.service';
import { State } from 'src/app/states/state.model';
import { StateService } from 'src/app/states/state.service';
import { City } from '../cities.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedCity: City;
  stateSelectForCity: any;
  regionSelectForCity: any;
  statesList: State[];
  regionsList: Region[];
  hideRegionSelect: boolean;
  hideCitiesForm: boolean;
  @ViewChild('f', {static: false}) slForm: NgForm;

  error = new Subject<string>();

  constructor(private cityService: CityService,
              private regionService: RegionService,
              private stateService: StateService) { }

  ngOnInit(): void {
    this.hideRegionSelect = true;
    this.hideCitiesForm = true;
    this.subscription = this.cityService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedCity = this.cityService.getCity(index);
          this.slForm.setValue({
            name: this.editedCity.name
          })
        }, error => {
          this.error.next(error.message);
        }
      );

      this.statesList = this.stateService.findAllStatesWithRegions();
      console.log(this.statesList);
  }

  

  onSubmitCity(form: NgForm) {

    const value = form.value;
    const newCity = new City(value.name);
    if(this.editMode) {
      this.cityService.updateCity(this.editedItemIndex, newCity);
    } else {
      this.cityService.addCity(newCity);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.cityService.deleteCity(this.editedItemIndex);
    this.onClear();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChangeStateSelect(value: String) {
    if(value === "") {
      this.hideRegionSelect = true;
    } else {
      this.hideRegionSelect = false;
      this.regionsList = this.regionService.getRegionsByStateId(+value);
      console.log(this.regionsList);
    }
  }

  onChangeRegionSelect(value: string) {
    if(value === "") {
      this.hideCitiesForm = true;
    } else {
      this.hideCitiesForm = false;
    }
  }



}
