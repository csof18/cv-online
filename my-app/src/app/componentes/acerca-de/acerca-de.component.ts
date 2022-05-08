import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public acercaDe: string = "";
  constructor(private datosPortfolio:PorfolioService) {
   }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data: DataPorfolio) =>{
      this.acercaDe = data.informacion_personal.acerca_de;
    }
    )
  }

}
