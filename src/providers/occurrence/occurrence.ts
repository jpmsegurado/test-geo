import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OccurrenceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class OccurrenceProvider {

  private baseUrl = 'www.1108....';

  constructor(public http: Http) {
    
  }

  getAllOcurrencies() {
    return this.http.get(`$${this.baseUrl}/efj`)
  }

}
