import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formCursos = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    fecha_inicio: new FormControl('', [Validators.required]),
    fecha_fin: new FormControl('', [Validators.required]),
    establecimiento: new FormControl('', [Validators.required])
  })
get titulo(){
    return this.formCursos.get('titulo')
  }
  get fecha_inicio(){
    return this.formCursos.get('fecha_inicio')
  }
  get fecha_fin(){
    return this.formCursos.get('fecha_fin')
  }
  get establecimiento(){
    return this.formCursos.get('establecimiento')
  }

}
