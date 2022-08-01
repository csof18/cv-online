import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from './servicios/portfolio.service'

import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidadesuras-blandas/habilidadesuras-blandas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  
  constructor(
    public usuarioForm: FormGroup,
    public personaForm: FormGroup,
    public fb: FormBuilder,
    public portfolioService: PortfolioService,

   
  ) {

  }
  ngOnInit(): void {
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      usser: ['', Validators.required],
      pasword: ['', Validators.required],
      datosPersona: ['', Validators.required],
      cursos: ['', Validators.required],
      educacion: ['', Validators.required],
      experiencia: ['', Validators.required],
      habilidades: ['', Validators.required],
      proyectos: ['', Validators.required]
    })
  }


  guardar(): void{
    
  }
}
 */