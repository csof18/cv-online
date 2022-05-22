import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formProyecto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    tecnologias: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required])
  })
get nombre(){
    return this.formProyecto.get('nombre')
  }
  get fecha(){
    return this.formProyecto.get('fecha')
  }
  get descripcion(){
    return this.formProyecto.get('descripcion')
  }
  get tecnologias(){
    return this.formProyecto.get('tecnologias')
  }
  get link(){
    return this.formProyecto.get('link')
  }
}
