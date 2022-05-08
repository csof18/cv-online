import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-habilidadesuras-blandas',
  templateUrl: './habilidadesuras-blandas.component.html',
  styleUrls: ['./habilidadesuras-blandas.component.css']
})
export class HabilidadesurasBlandasComponent implements OnInit {
  listaHabilidadesBlandas:any;
  listaHabilidadesDuras:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: DataPorfolio) => {
      this.listaHabilidadesBlandas = data.habilidades.blandas;
      this.listaHabilidadesDuras = data.habilidades.duras;
    })
  }

}
