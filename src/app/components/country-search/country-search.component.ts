import { Component, OnInit } from '@angular/core';
import { CountryService, Country } from '../../core/services/country.service';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  public text: string;
  public countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  search(event) {
    this.countryService.search(event.query).subscribe(data => {
      this.countries = data;
    });
  }

}
