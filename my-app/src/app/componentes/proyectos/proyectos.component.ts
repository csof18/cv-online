import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { DataPorfolio, Proyecto } from 'src/app/modulos/data-porfolio'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos:any;
  constructor(private datosPortfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data: DataPorfolio)=> {
      this.listaProyectos = data.proyectos.map(proyecto => ({
        nombre: proyecto.nombre,
        fecha: proyecto.fecha,
        descripcion: proyecto.descripcion,
        link: proyecto.link,
        tecnologias: proyecto.tecnologias.join(" | "),
      }))
    })
  }
}