import { Component, OnInit } from '@angular/core';
import { Region } from '../region.model';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-regions-list',
  templateUrl: './regions-list.component.html',
  styleUrls: ['./regions-list.component.css']
})
export class RegionsListComponent implements OnInit {
  
  regions: Region[];
  

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
    this.regions = this.regionService.getRegions();
  }

}
