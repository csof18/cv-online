import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {
  public habilidades: any;
  public formHabilidades: any;
  public msjGuardar:boolean = false;
  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    this.formHabilidades = new FormGroup({
      habilidad: new FormControl('', [Validators.required]),
      nivel: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      establecimiento: new FormControl('', [Validators.required])
    })
    this.datosPortfolio.obtenerHabilidades().subscribe((data)=> {
      this.habilidades = data;
    })

  }
  
  guardarProyectos(){
    this.msjGuardar = false;
    this.datosPortfolio.agregarHabilidades(this.formHabilidades.value).subscribe(valoresData=>{
      this.formHabilidades.reset();
      this.msjGuardar = true;
    })
  }
// get habilidad(){
//     return this.formHabilidades.get('habilidad')
//   }
//   get nivel(){
//     return this.formHabilidades.get('nivel')
//   }
//   get img(){
//     return this.formHabilidades.get('img')
//   }
//   get establecimiento(){
//     return this.formHabilidades.get('establecimiento')
//   }
}
