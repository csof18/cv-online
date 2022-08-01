import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educacion: any;
  public cursos: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void {
    this.oEducacion()
    this.oCursos()
  }

  oEducacion() {
    this.datosPortfolio.obtenerEducacion().subscribe((data) => {
      this.educacion = data;
    })
  }
  oCursos(){
    this.datosPortfolio.obtenerCursos().subscribe((data) => {
      this.cursos = data;
    })
  }
}
