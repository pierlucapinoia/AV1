import { Component, OnDestroy, OnInit } from '@angular/core';
import { JsonReader } from '../JsonReader.service';
import { StateService } from '../states/state.service';
import { StateRestService } from '../states/stateRest.service';
import { Region } from './region.model';
import { RegionService } from './region.service';
import { RegionRestService } from './regionRest.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  providers: [RegionService, RegionRestService, StateService, StateRestService, JsonReader]
})
export class RegionsComponent implements OnInit, OnDestroy {
  selectedRegion: Region;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regionService.regionSelected
    .subscribe(
      (region: Region) => {
        this.selectedRegion = region;
      }
    )
    
  }

  ngOnDestroy() {
    this.regionService.regionSelected.unsubscribe();
  }

}
