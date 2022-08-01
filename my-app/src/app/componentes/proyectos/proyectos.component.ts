import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos:any;
  public btnEliminar: boolean;
  public formProyecto: any;
  constructor(private datosPortfolio:PortfolioService,
    private servicioDeLogin: LoginService) { 
      this.btnEliminar = false;
    }

  ngOnInit(): void {
    this.oProyectos();
    this.servicioDeLogin.logueado.subscribe(data => {
      if(data){
        this.btnEliminar = true;
        console.log('BOTON BORRAR TRUE');
      }else{
        this.btnEliminar = false;
        console.log('BTN ELIMINAR FALSO');
      }
    })
  }
  oProyectos(){
    this.datosPortfolio.obtenerProyectos().subscribe((data)=> {
      this.proyectos = data;
    })
  }
  // edicionDeProyecto(){
  //   this.datosPortfolio.editarProyectos(this.formProyecto.value).subscribe(editData=>{
 
  //     this.formProyecto.setValue({
  //       nombre: this.proyectos.nombre,
  //       fecha: this.proyectos.fecha,
  //       descripcion: this.proyectos.descripcion,
  //       tecnologias: this.proyectos.tecnologias,
  //       link: this.proyectos.link
  //      })
  //      console.log( this.proyectos.nombre, 'VER VALOR DE  nombre: proyectos.nombre')
  //    })
  //    console.log('EDITAAAAAAAAAAAAAAR PROYECTO');
  //  }
}