import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencia: any;
  constructor(private datosPortfolio: PortfolioService) { }

  ngOnInit(): void { 
    this.oExperiencia(); 
  }
  oExperiencia() {
    this.datosPortfolio.obtenerExperiencia().subscribe((data) => {
      this.experiencia = data;
    })
  }
}

