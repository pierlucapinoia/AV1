import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatesComponent } from './states/states.component';
import { StatesListComponent } from './states/states-list/states-list.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionsListComponent } from './regions/regions-list/regions-list.component';
import { CitiesComponent } from './cities/cities.component';
import { StatesDetailComponent } from './states/states-detail/states-detail.component';
import { StatesItemComponent } from './states/states-list/states-item/states-item.component';
import { CityEditComponent } from './cities/city-edit/city-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DropdownDirective } from './shared/dropdown.directive';
import { CityService } from './cities/city.service';
import { RegionDetailComponent } from './regions/region-detail/region-detail.component';
import { RegionsItemComponent } from './regions/regions-list/regions-item/regions-item.component';
import { AppRoutingModule } from './app-routing.module';
import { StateStartComponent } from './states/state-start/state-start.component';
import { StateEditComponent } from './states/state-edit/state-edit.component';
import { RegionStartComponent } from './regions/region-start/region-start.component';
import { RegionEditComponent } from './regions/region-edit/region-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatesComponent,
    StatesListComponent,
    RegionsComponent,
    RegionsListComponent,
    CitiesComponent,
    StatesDetailComponent,
    StatesItemComponent,
    CityEditComponent,
    DropdownDirective,
    RegionDetailComponent,
    RegionsItemComponent,
    StateStartComponent,
    StateEditComponent,
    RegionStartComponent,
    RegionEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
