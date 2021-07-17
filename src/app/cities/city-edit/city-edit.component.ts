import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription, throwError } from 'rxjs';
import { Region } from 'src/app/regions/region.model';
import { RegionService } from 'src/app/regions/region.service';
import { RegionRestService } from 'src/app/regions/regionRest.service';
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
              private stateService: StateService,
              private regionRestService: RegionRestService) { }

  ngOnInit(): void {
    this.hideRegionSelect = true;
    this.hideCitiesForm = true;
    this.subscription = this.cityService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editedCity = this.cityService.getCity(index);
          this.slForm.setValue({
            name: this.editedCity.cityName
          })
        }, error => {
          this.error.next(error.message);
        }
      );

    this.statesList = this.stateService.findAllStatesWithRegions();
  }

  

  onSubmitCity(form: NgForm) {

    const value = form.value;
    const regionId = this.regionSelectForCity;
    const stateId = this.stateSelectForCity;

    let idRegion: number;
    let currentRegion: Region;
    let currentRegions: Region[];
    this.regionRestService.getRegionsByStateId(+stateId)
      .subscribe((responseData) => {
        responseData.forEach((element) => {
          if(element.idRegion === +regionId) {
            currentRegion = element;
            console.log(currentRegion)
            this.cityService.addCity("lllll")
          }
            
        })
      })

    form.reset();
  }

  onClear() {
    this.slForm.reset();
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
