import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesurasBlandasComponent } from './componentes/habilidadesuras-blandas/habilidadesuras-blandas.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { BotonesComponent } from './componentes/botones/botones.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { DatosPersonalesComponent } from './componentes/datos-personales/datos-personales.component';
import { HttpClientModule } from '@angular/common/http';
import { BotonesDeEdicionComponent } from './componentes/botones-de-edicion/botones-de-edicion.component';
import { NivelDeHabilidadesComponent } from './componentes/nivel-de-habilidades/nivel-de-habilidades.component';
import { LoginComponent } from './componentes/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarDatosPersonalesComponent } from './componentes/editar-datos-personales/editar-datos-personales.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarCursosComponent } from './componentes/editar-cursos/editar-cursos.component';
import { EditarHabilidadesComponent } from './componentes/editar-habilidades/editar-habilidades.component';
import { EditarProyectosComponent } from './componentes/editar-proyectos/editar-proyectos.component';
import { EditarBannerComponent } from './componentes/editar-banner/editar-banner.component';
import { EditarAcercaDeComponent } from './componentes/editar-acerca-de/editar-acerca-de.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    HabilidadesurasBlandasComponent,
    ProyectosComponent,
    BotonesComponent,
    BannerComponent,
    DatosPersonalesComponent,
    BotonesDeEdicionComponent,
    NivelDeHabilidadesComponent,
    LoginComponent,
    EditarDatosPersonalesComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarCursosComponent,
    EditarHabilidadesComponent,
    EditarProyectosComponent,
    EditarBannerComponent,
    EditarAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
