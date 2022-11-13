import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { RegionsComponent } from './common/regions/regions.component';

@NgModule({
  declarations: [
    AppComponent,
    CountrydetailComponent,
    RegionsComponent,
    
  ],
  imports: [
    BrowserModule,AgGridModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
