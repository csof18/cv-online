import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  public datosPersonales:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.oDatosPersona()
  }
  
  oDatosPersona(){
    this.datosPortfolio.obtenerDatosPersona().subscribe((data)=> {
      this.datosPersonales = data;
      console.log(data, 'VER DATA EN DATOS PERSONALES');
      console.log(this.datosPersonales, 'VER this.datosPersonales EN DATOS PERSONALES');
    })
  }
}
