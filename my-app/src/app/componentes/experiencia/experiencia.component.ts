import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { LoginService } from 'src/app/servicios/login.service';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public listaExperiencia:any;

  constructor(
    private datosPorfolio:PorfolioService
    //private servicioLogin: LoginService 
    ) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: DataPorfolio) => {
      this.listaExperiencia = data.experiencia;
    })
    /*this.servicioLogin.disparadorDeLogin.subscribe(data => {
      console.log('RECIBIENDO DATA  ', data);
      this.
    })*/
  }

}
