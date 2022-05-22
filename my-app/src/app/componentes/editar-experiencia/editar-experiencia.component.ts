import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  public formExperiencia = new FormGroup({
    posicion: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl('', [Validators.required]),
    empresa: new FormControl('', [Validators.required])
  })
  constructor() { }

  ngOnInit(): void {
  }

  get posicion(){
    return this.formExperiencia.get('posicion')
  }
  get fecha_inicio(){
    return this.formExperiencia.get('fecha_inicio')
  }
  get fecha_fin(){
    return this.formExperiencia.get('fecha_fin')
  }
  get empresa(){
    return this.formExperiencia.get('empresa')
  }
}
