import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';


@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.scss']
})
export class CountrydetailComponent implements OnInit {
  [x: string]: any;
      
  country: any;
  
  getRowHeight : any;

  columnDefs = [
    { field: 'name',width: 140, sortable:true, resizable:true,  },
    { field: 'capital',width: 160, sortable:true, resizable:true,   },
    { field: 'population',width: 180, sortable:true, resizable:true,   },
    { field: 'currencies',width: 180, sortable:true, resizable:true,   },
    { field: 'flag',width: 440, sortable:true, resizable:true,   } 
  ]

  rowData : any [] ;

  constructor(
    public countryService: CountriesService,    
  ) { }
  
  ngOnInit() {
    this.getRowHeight = function (params) {
      return 35;      
    }
  }

  receiveCountryName($event){
    this.country = $event
    this.getCountryDetails(this.country);
  }
  
  getCountryDetails(country) {
    this.rowData = this.countryService.findCountryDetails(country);   
 }

}


