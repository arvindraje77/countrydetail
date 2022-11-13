import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountriesService } from 'src/app/countries.service';
const dropdowndata = require("./../../static-data/region-country.json");

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
  [x: string]: any;

  @Output() messageEvent = new EventEmitter<String>();

  region : any;
  country : any;
  countryList : any[];
  dropdowndata = dropdowndata;
  regionList = [
    {"id": "1", "name": "Asia"},
    {"id": "2", "name": "Europe"}, 
  ];

 
  constructor(
    public countryService: CountriesService,   
  ) { }
  
  ngOnInit(): void {
   this.region = 'Europe';
  }

  changeCountryList(){
    if(this.region == '' ){
      this.countryList = null;
    }else{
      //For testing purpose data is reading from json file.
      /*let x = this.dropdowndata.filter(data => data.regionId == this.region);
      this.countryList = x[0]['countryList'];
     */
    //changes may required based to data received from api service
      this.countryService.findRegionBasedCountry(this.region).subscribe((data: any[])=>{
        this.countryList = data;
      }, err =>{ 
        this.showError('audit parent curve dropdown', err);
       });

    }
  }

  sendCountryName(){
    this.messageEvent.emit(this.country);
  }

}


