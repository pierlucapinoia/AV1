import { Component, OnInit } from '@angular/core';
import { Region } from './region.model';
import { RegionService } from './region.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css'],
  providers: [RegionService]
})
export class RegionsComponent implements OnInit {
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

}
