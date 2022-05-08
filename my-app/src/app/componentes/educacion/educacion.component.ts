import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public listaEducacion:any;
  public listacursos:any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: DataPorfolio) => {
      this.listaEducacion = data.educacion;
      this.listacursos = data.cursos;
    })
  }

}
