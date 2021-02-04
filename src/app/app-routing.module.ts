import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitiesComponent } from "./cities/cities.component";
import { RegionsComponent } from "./regions/regions.component";
import { StatesComponent } from "./states/states.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/states', pathMatch: 'full'},
    { path: 'states', component: StatesComponent},
    { path: 'regions', component: RegionsComponent},
    { path: 'cities', component: CitiesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}