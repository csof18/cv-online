import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  public educacion: any;
  public formEducacion: any;
  public msjGuardar:boolean = false;
  constructor(private datosPortfolio:PortfolioService) {}
  
  ngOnInit(): void {
    this.formEducacion = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
      establecimiento: new FormControl('', [Validators.required])
    })
    this.datosPortfolio.obtenerEducacion().subscribe((data)=> {
      this.educacion = data;
    })

  }
  
  guardarEducacion(){
    this.msjGuardar = false;
    this.datosPortfolio.agregarEducacion(this.formEducacion.value).subscribe(valoresData=>{
      this.formEducacion.reset();
      this.msjGuardar = true;
    })
  }

/* 

  public modal: any;
 this.cerrarModal();
      console.log('Llamaron a Guardar, Guardo y luego Cierro Modal');
      
 abrirModal(){
    this.modal = new bootstrap.Modal(document.getElementById('myModal'));
    this.modal.show();
  }
  cerrarModal() {
    console.log('Llamaron a Cerrar Modal, Cierro Modal');
    this.modal.hide();
  }

  guardar() {
    console.log('Llamaron a Guardar, Guardo y luego Cierro Modal');
    this.cerrarModal();
  }
   */


  // get titulo(){
  //   return this.formEducacion.get('titulo')
  // }
  // get fecha_inicio(){
  //   return this.formEducacion.get('fecha_inicio')
  // }
  // get fecha_fin(){
  //   return this.formEducacion.get('fecha_fin')
  // }
  // get establecimiento(){
  //   return this.formEducacion.get('establecimiento')
  // }



}
