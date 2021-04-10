import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "./cities/cities.component";
import { RegionDetailComponent } from "./regions/region-detail/region-detail.component";
import { RegionEditComponent } from "./regions/region-edit/region-edit.component";
import { RegionStartComponent } from "./regions/region-start/region-start.component";
import { RegionsComponent } from "./regions/regions.component";
import { StateEditComponent } from "./states/state-edit/state-edit.component";
import { StateStartComponent } from "./states/state-start/state-start.component";
import { StatesDetailComponent } from "./states/states-detail/states-detail.component";
import { StatesComponent } from "./states/states.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/states', pathMatch: 'full'},
    { path: 'states', component: StatesComponent, children: [
        {path:'', component: StateStartComponent},
        {path: 'new', component: StateEditComponent},
        {path: ':id', component: StatesDetailComponent},
        {path: ':id/edit', component: StateEditComponent}
    ]},
    { path: 'regions', component: RegionsComponent, children: [
        {path:'', component: RegionStartComponent},
        {path: 'new', component: RegionEditComponent},
        {path:':id', component: RegionDetailComponent}
        
    ]},
    { path: 'cities', component: CitiesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}