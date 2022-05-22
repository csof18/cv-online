import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  public formEducacion = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl('', [Validators.required]),
    establecimiento: new FormControl('', [Validators.required])
  })
  constructor() {}

  ngOnInit(): void {
  }

  get titulo(){
    return this.formEducacion.get('titulo')
  }
  get fecha_inicio(){
    return this.formEducacion.get('fecha_inicio')
  }
  get fecha_fin(){
    return this.formEducacion.get('fecha_fin')
  }
  get establecimiento(){
    return this.formEducacion.get('establecimiento')
  }



}
