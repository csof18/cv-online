import { Injectable,  Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8080/api";
  //especificar el observable 
  //usuarioActual: BehaviorSubject<any>; //siempreva a devolver el ultimo valor
  @Output() logueado: EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) { 
    //this.usuarioActual = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('usuario') || '{}'));
  }
  /*
   login(): Observable<any> {
    return this.http.get(`${this.url}/buscar/usuario/${id}`);    
  }
   */
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