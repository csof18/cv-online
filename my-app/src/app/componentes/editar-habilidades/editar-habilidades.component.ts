import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formHabilidades = new FormGroup({
    habilidad: new FormControl('', [Validators.required]),
    nivel: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    establecimiento: new FormControl('', [Validators.required])
  })
get habilidad(){
    return this.formHabilidades.get('habilidad')
  }
  get nivel(){
    return this.formHabilidades.get('nivel')
  }
  get img(){
    return this.formHabilidades.get('img')
  }
  get establecimiento(){
    return this.formHabilidades.get('establecimiento')
  }
}
