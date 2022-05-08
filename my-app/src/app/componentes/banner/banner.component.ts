import { Component, OnInit } from '@angular/core';
import { DataPorfolio } from 'src/app/modulos/data-porfolio';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public banner: string = "";
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data: DataPorfolio) => {
      this.banner = data.informacion_personal.banner;
    })
  }

}
