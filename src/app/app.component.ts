import { Component } from '@angular/core';
import { StockDataService } from './stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any[] = [];
  public from: Date = new Date('2009/02/05');
  public to: Date = new Date('2011/10/07');

  constructor(private service: StockDataService) {
    this.service.get().then((data) => {
      this.data = data;
    });
  }
}
