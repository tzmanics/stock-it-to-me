import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StockChartModule } from '@progress/kendo-angular-charts';
import { AppComponent } from './app.component';
import { StockDataService } from './stock-data.service';

import 'rxjs/add/operator/map';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonpModule,
    StockChartModule
  ],
  providers: [ StockDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
