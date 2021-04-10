import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-region-edit',
  templateUrl: './region-edit.component.html',
  styleUrls: ['./region-edit.component.css']
})
export class RegionEditComponent implements OnInit, OnDestroy {

  idStateSelected: number;
  stateNameSelected: String;
  constructor(private route: ActivatedRoute, private regionService: RegionService) { }


  ngOnInit(): void {
    this.route.queryParams
    .subscribe(param => {
      this.idStateSelected = param.idStateSelected;
      this.stateNameSelected = param.stateName;
    });
  }

  onSubmit(form: NgForm) {
    this.regionService.addRegion(this.idStateSelected, this.stateNameSelected, form.value.regionNameInput)
  }

  ngOnDestroy(): void {
    
  }

}
