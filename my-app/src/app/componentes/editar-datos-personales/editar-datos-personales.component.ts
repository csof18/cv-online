import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-datos-personales',
  templateUrl: './editar-datos-personales.component.html',
  styleUrls: ['./editar-datos-personales.component.css']
})
export class EditarDatosPersonalesComponent implements OnInit {


  ngOnInit(): void {
  }

  public formDatosPersonales = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    titulo: new FormControl('', [Validators.required]),
    foto_perfil: new FormControl('', [Validators.required])
  })
  get nombre(){
    return this.formDatosPersonales.get('nombre')
  }
  get apellido(){
    return this.formDatosPersonales.get('apellido')
  }
  get titulo(){
    return this.formDatosPersonales.get('titulo')
  }
  get foto_perfil(){
    return this.formDatosPersonales.get('foto_perfil')
  }
}
