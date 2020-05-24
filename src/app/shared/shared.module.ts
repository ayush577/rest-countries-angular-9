import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";

@NgModule({
  declarations: [HeaderComponent, AutocompleteComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, AutocompleteComponent],
})
export class SharedModule {}
