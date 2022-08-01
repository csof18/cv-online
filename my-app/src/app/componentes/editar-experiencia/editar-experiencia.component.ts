import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  public formExperiencia: any;
  public experiencia: any;
  public msjGuardar:boolean = false;

  constructor(
    private datosPortfolio:PortfolioService
  ) { }
  
  ngOnInit(): void {
    this.formExperiencia = new FormGroup({
      posicion: new FormControl('', [Validators.required]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
      empresa: new FormControl('', [Validators.required])
    })
    this.datosPortfolio.obtenerExperiencia().subscribe((data)=> {
      this.experiencia = data;
    })

  }
  
  guardarHabilidades(){
    this.msjGuardar = false;
    this.datosPortfolio.agregarExperiencia(this.formExperiencia.value).subscribe(valoresData=>{
      this.formExperiencia.reset();
      this.msjGuardar = true;
    })
  }

  // get posicion(){
  //   return this.formExperiencia.get('posicion')
  // }
  // get fecha_inicio(){
  //   return this.formExperiencia.get('fecha_inicio')
  // }
  // get fecha_fin(){
  //   return this.formExperiencia.get('fecha_fin')
  // }
  // get empresa(){
  //   return this.formExperiencia.get('empresa')
  // }
}
