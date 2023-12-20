import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pump } from './pump.model';

@Injectable({ providedIn: 'root' })
export class PumpService {

  private pumpsUrl = 'api/pumps';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
) { }

  getPumps(params:any): Observable<Pump[]> {
    const queryParams = new HttpParams({ fromObject: { ...params } });
    return this.http.get<Pump[]>(this.pumpsUrl,{ params: queryParams } )
  }

  validateUniqueId(id: string): Observable<Pump> {
    const url = `${this.pumpsUrl}/?id=${id}`;
    return this.http.get<Pump[]>(url)
      .pipe(
        map(pumps => pumps[0])
      );
  }

  addPump(pump: Pump): Observable<Pump> {
    return this.http.post<Pump>(this.pumpsUrl, pump, this.httpOptions);
  }

  updatePumpStatus(pump: Pump): Observable<any> {
    return this.http.put(this.pumpsUrl, pump, this.httpOptions);
  }

  deletePump(id: string): Observable<Pump> {
    const url = `${this.pumpsUrl}/${id}`;
    return this.http.delete<Pump>(url, this.httpOptions);
  }
}
