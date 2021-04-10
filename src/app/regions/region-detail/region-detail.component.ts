import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Region } from '../region.model';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit, OnDestroy {
  region: Region;
  constructor(private regionService: RegionService,              
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.region = this.regionService.getRegionById(+params['id']);
    });
  }

  ngOnDestroy(): void {
    
  }
}
