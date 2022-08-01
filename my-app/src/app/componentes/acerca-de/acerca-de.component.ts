import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public datosPersonales: any;
  constructor(private datosPortfolio:PortfolioService) {
   }

  ngOnInit(): void {
    this.oDatosPersona()
  }

  oDatosPersona(){
    this.datosPortfolio.obtenerDatosPersona().subscribe((data)=> {
      this.datosPersonales = data;
    })
  }

}
