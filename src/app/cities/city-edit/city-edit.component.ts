import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject, Subscription, throwError } from 'rxjs';
import { StateService } from 'src/app/states/state.service';
import { City } from '../cities.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  // @ViewChild('inhabitantsInput', {static: false}) inhabitantsInputRef: ElementRef;
  // @Output() cityAdded = new EventEmitter<City>();
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedCity: City;
  stateSelectForCity: any;
  regionSelectForCity: any;
  statesList = [];
  regionsList = [];
  @ViewChild('f', {static: false}) slForm: NgForm;

  error = new Subject<string>();

  constructor(private cityService: CityService,
              private stateService: StateService) { }

  ngOnInit(): void {
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
    //this.cityService.addCity(newCity);
    // this.cityAdded.emit(newCity);
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

  onChangeStateSelect(value: string) {

  }

  onChangeRegionSelect(value: string) {

  }



}
