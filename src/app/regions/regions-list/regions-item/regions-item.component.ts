import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../../region.model';
import { RegionService } from '../../region.service';

@Component({
  selector: 'app-regions-item',
  templateUrl: './regions-item.component.html',
  styleUrls: ['./regions-item.component.css']
})
export class RegionsItemComponent implements OnInit {
  @Input() region: Region;
  @Input() index: number;

  constructor(private regionService: RegionService) { }

  ngOnInit(): void {
  }

  onSelectedRegion() {
    this.regionService.regionSelected.emit(this.region);
  }
  
}
