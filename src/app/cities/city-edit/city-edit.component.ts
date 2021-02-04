import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { City } from '../cities.model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('inhabitantsInput', {static: false}) inhabitantsInputRef: ElementRef;
  // @Output() cityAdded = new EventEmitter<City>();

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
  }

  onAddCity() {
    const cityName = this.nameInputRef.nativeElement.value;
    const cityInhabitants = this.inhabitantsInputRef.nativeElement.value;
    const newCity = new City(cityName, cityInhabitants);
    this.cityService.addCity(newCity);
    // this.cityAdded.emit(newCity);
  }

}
