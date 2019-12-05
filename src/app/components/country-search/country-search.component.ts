import { Component, OnInit } from '@angular/core';
import { CountryService, Country } from '../../services/country.service';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss']
})
export class CountrySearchComponent implements OnInit {
  public text: string;
  public results: any;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }

  search(event) {
    this.countryService.search(event.query).subscribe(data => {
      this.results = data;
    });
  }

}
