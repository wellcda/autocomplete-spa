import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CountrySearchComponent } from './country-search.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
