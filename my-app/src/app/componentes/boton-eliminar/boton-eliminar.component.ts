
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-boton-eliminar',
  templateUrl: './boton-eliminar.component.html',
  styleUrls: ['./boton-eliminar.component.css']
})
export class BotonEliminarComponent implements OnInit {
public btnEliminar: boolean;

  constructor(private servicioDeLogin: LoginService) { 
    this.btnEliminar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe(data => {
      if(data){
        this.btnEliminar = true;
        console.log('BOTON BORRAR TRUE');
      }else{
        this.btnEliminar = false;
        console.log('BTN ELIMINAR FALSO');
      }
    })
  }

}

/* 

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-boton-eliminar',
  templateUrl: './boton-eliminar.component.html',
  styleUrls: ['./boton-eliminar.component.css']
})
export class BotonEliminarComponent implements OnInit {

  public btnEliminar: boolean;
  public mostrarEditar: boolean;
  constructor(private servicioDeLogin: LoginService) {
    this.btnEliminar = false;
    this.mostrarEditar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe(data => {
      if (data) {
        this.mostrarEditar = true;
        this.btnEliminar = true;
        console.log('BOTON BORRAR TRUE');
      } else {
        this.mostrarEditar = false;
        this.btnEliminar = false;
        console.log('BTN ELIMINAR FALSO');
      }
    })
  }

}
 */
