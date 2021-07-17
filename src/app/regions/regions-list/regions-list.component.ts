import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';
import { State } from 'src/app/states/state.model';
import { StateService } from 'src/app/states/state.service';
import { Region } from '../region.model';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
  
  regionsList: Region[];
  statesList: State[];
  stateSelected = false;
  regionForm: FormGroup;
  idStateSelected: number;
  nameStateSelected: String;
  isSelectDisabled: boolean;

  constructor(private regionService: RegionService,
              private stateService: StateService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('init')
    this.isSelectDisabled = false;
    this.statesList = this.stateService.getStates();

    this.regionService.needUpdate.subscribe((needUpdate: Boolean) => {
      if(needUpdate) {
        this.isSelectDisabled = false;
        this.regionsList = this.regionService.getRegionsByStateId(this.idStateSelected);
      }   
    })
  }

  onChangeSelect(value: String) {
    if(value === "")
      this.stateSelected = false
    else {
      this.stateSelected = true;
      this.idStateSelected = +value;
      this.nameStateSelected = this.statesList.filter(x => x.idState === +value)[0].name;
      console.log(this.regionsList);
      this.regionsList = this.regionService.getRegionsByStateId(this.idStateSelected);
      console.log(this.regionsList);
    }
  }

  onNewRegion() {
    this.isSelectDisabled = true;
    this.router.navigate(['new'],  {relativeTo: this.route, 
      queryParams: {idStateSelected: this.idStateSelected, stateName: this.nameStateSelected}});
  }

  onDeleteRegion(idRegion: number) {
    this.regionService.deleteRegion(idRegion);
  }

}
