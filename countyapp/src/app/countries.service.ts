import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
const staticdata = require("./static-data/countrydata.json");

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  [x: string]: any;

  countryData = staticdata;
  constructor() { }

  findCountryDetails(countryName): any[] {
    console.log('Inside Service countryData-->'+JSON.stringify(this.countryData.filter(data => data.name == countryName)));
    return (this.countryData.filter(data => data.name == countryName));
  }


  findRegionBasedCountry(regionId): Observable<any> {
    let url = "ttps://restcountries.eu/rest/v2/region/asia";
    if(regionId == 2){
      url = "ttps://restcountries.eu/rest/v2/region/europe";
    }
    return this.httpClient.get(url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

}
