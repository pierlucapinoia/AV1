import { Component, Input, OnInit } from '@angular/core';
import { Region } from '../region.model';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {
  @Input() region: Region;
  constructor() { }

  ngOnInit(): void {
  }

}
