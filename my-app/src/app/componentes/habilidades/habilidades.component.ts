import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidadesuras-blandas',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public habilidades: any;
  constructor(private datosPorfolio: PortfolioService) { }

  ngOnInit(): void {
    this.oHabilidades();
  }
  oHabilidades() {
    this.datosPorfolio.obtenerHabilidades().subscribe((data) => {
      this.habilidades = data;
    })
  }
}
