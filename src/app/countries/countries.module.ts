import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReactiveFormsModule } from "@angular/forms";

import { CountriesRoutingModule } from "./countries-routing.module";
import { HomeComponent } from "./home/home.component";
import { FilterComponent } from "./filter/filter.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent, FilterComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class CountriesModule {}
