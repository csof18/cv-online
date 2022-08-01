import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-botones-de-edicion',
  templateUrl: './botones-de-edicion.component.html',
  styleUrls: ['./botones-de-edicion.component.css']
})
export class BotonesDeEdicionComponent implements OnInit {
  public mostrarEditar: boolean;
  constructor(private servicioDeLogin: LoginService) {
    this.mostrarEditar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe( data => {
      if(data){
        this.mostrarEditar = true;
      }else{
        this.mostrarEditar = false;
      }
    })
  }

}
