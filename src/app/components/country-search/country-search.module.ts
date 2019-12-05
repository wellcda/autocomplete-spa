import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountrySearchComponent } from './country-search.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    AutoCompleteModule,
  ],
  exports: [
    CountrySearchComponent
  ],
  declarations: [
    CountrySearchComponent
  ]
})
export class CountrySearchModule { }
