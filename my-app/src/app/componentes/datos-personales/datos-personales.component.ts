import { Component, OnInit } from '@angular/core';
import { DataPorfolio, InformacionPersonal } from 'src/app/modulos/data-porfolio';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  public datosPersonales:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: DataPorfolio)=> {
      this.datosPersonales = data.informacion_personal;
    })
  }

}
