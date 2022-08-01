import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersona, Educacion, Experiencia, Habilidades, Proyectos, Cursos } from '../modulos/data-porfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private backURL = "http://localhost:8080/api";
  constructor(private http: HttpClient) { }
  /*
    obtenerDatos(): Observable<DataPorfolio> {
      return this.http.get<DataPorfolio>(`${this.backURL}`); 
    }
    public obtenerDatos(): Observable<any> {
      return this.http.get(`${this.backURL}`); 
    }
    */

  //BUSCAR
  buscar(propiedad: any, id: Number): Observable<any> {
    return this.http.delete<any>(`${this.backURL}/buscar/${propiedad}/${id}`);
  }

  //ELIMINAR
  eliminar(entidad: any, id: Number): Observable<any> {
    return this.http.delete<any>(`${this.backURL}/delete/${entidad}/${id}`);
  }

  //DATOS PERSONA
  obtenerDatosPersona(): Observable<DatosPersona> {
    return this.http.get<DatosPersona>(`${this.backURL}/ver/datosPersona`);
  }
  agregarDatosPersona(datosPersona: DatosPersona): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/datosPersona`, datosPersona);
  }
  editarDatosPersona(datosPersona: DatosPersona): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/datosPersona`, datosPersona);
  }

  //CURSOS
  obtenerCursos(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${this.backURL}/ver/cursos`);
  }
  agregarCursos(cursos: Cursos): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/cursos`, cursos);
  }
  editarCursos(cursos: Cursos): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/cursos`, cursos);
  }

  //EDUCACION
  obtenerEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(`${this.backURL}/ver/educacion`);
  }
  agregarEducacion(educacion: Educacion): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/educacion`, educacion);
  }
  editarEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/educacion`, educacion);
  }

  //EXPERIENCIA
  obtenerExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(`${this.backURL}/ver/experiencia`);
  }
  agregarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/experiencia`, experiencia);
  }
  editarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/experiencia`, experiencia);
  }

  //HABILIDADES
  obtenerHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(`${this.backURL}/ver/habilidades`);
  }
  agregarHabilidades(habilidades: Habilidades): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/habilidades`, habilidades);
  }
  editarHabilidades(habilidades: Habilidades): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/habilidades`, habilidades);
  }

  //PROYECTOS
  obtenerProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(`${this.backURL}/ver/proyectos`);
  }
  agregarProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/proyectos`, proyectos);
  }
  editarProyectos(proyectos: Proyectos): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/proyectos`, proyectos);
  }
}
