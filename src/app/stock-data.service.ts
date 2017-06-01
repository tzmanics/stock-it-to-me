import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class StockDataService {
  private url = 'https://demos.telerik.com/kendo-ui/service/StockData';

  constructor(private jsonp: Jsonp) {
  }

  public get(filter?: any): Promise<any[]> {
    return new Promise<any[]>((resolve: Function) => {
      this.jsonp.get(this.url, this.getOptions(filter))
      .map(res => res.json())
      .subscribe(result => resolve(result));
    });
  }

  private getOptions(filter: any): RequestOptionsArgs {
    const params = new URLSearchParams();
    const options: RequestOptionsArgs = {
      search: params
    };

    params.append('callback', `JSONP_CALLBACK`);

    if (filter) {
      const filters = {
        logic: 'and',
        filters: [{
          field: 'Date',
          operator: 'gte',
          value: filter.from
        }, {
          field: 'Date',
          operator: 'lt',
          value: filter.to
        }]
      };
      params.append('filter', JSON.stringify(filters));
    }

    return options;
  }
}
