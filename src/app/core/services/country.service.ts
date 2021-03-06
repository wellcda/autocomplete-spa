import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Country {
  constructor(
    public name: string = '',
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public search(query: string): Observable<Country[]> {
    return this.http.get(`/countries?searchQuery=${query}`) as any;
  }
}
