import { Injectable,  Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() logueado: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) { }

  login(): Observable<any> {
    return this.http.get('./assets/data/loginResponse.json');    
  }
  emitirLogueado(){
    this.logueado.emit(true); 
  }
  emitirDeslogueado(){
    this.logueado.emit(false);
  }
}