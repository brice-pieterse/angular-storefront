import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

type Country = {
  "name": {
    "common":  string
  }
}

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all')
  }

}
