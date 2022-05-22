import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-botones-de-edicion',
  templateUrl: './botones-de-edicion.component.html',
  styleUrls: ['./botones-de-edicion.component.css']
})
export class BotonesDeEdicionComponent implements OnInit {
  // agrego esto para poder mostrarEditar o esconder los botones
  // con una variable
  public mostrarEditar: boolean;
  constructor(private servicioDeLogin: LoginService) {
    // por defecto empieza en falso. 
    //si me logueo deberia ser true
    this.mostrarEditar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe( data => {
      //si emite true entonces mostramos los botones
      console.log(data, 'ver valor de data');
      if(data){
        this.mostrarEditar = true;
        console.log('estoy en el if del boton editar estoy en true VER VALOR DATA')
      }else{
        this.mostrarEditar = false;
        console.log('estoy en el else del boton editar estoy en false  VER VALOR DATA')
      }
    })
  }

}
