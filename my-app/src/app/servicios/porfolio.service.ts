import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataPorfolio } from '../modulos/data-porfolio';
@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<DataPorfolio>(('./assets/data/data.json'));
    
  }
}
