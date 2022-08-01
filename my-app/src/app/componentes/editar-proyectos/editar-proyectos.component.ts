import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {
  public proyectos: any;
  public formProyecto: any;
  public msjGuardar:boolean = false;
  constructor(
    private datosPortfolio:PortfolioService
  ) { }

  ngOnInit(): void {
    this.formProyecto = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      tecnologias: new FormControl('', [Validators.required]),
      link: new FormControl('', [Validators.required])
    })
    this.verProyectos()
  }
  verProyectos():void{
    this.datosPortfolio.obtenerProyectos().subscribe((data)=> {
      this.proyectos = data;
    })
  }
  
  guardarProyectos(){
    this.msjGuardar = false;
    this.datosPortfolio.agregarProyectos(this.formProyecto.value).subscribe(data=>{
      this.formProyecto.reset();
      // this.proyectos.push(data);
      this.msjGuardar = true;
    })
  }
  edicionDeProyecto(){
    this.datosPortfolio.editarProyectos(this.formProyecto.value).subscribe(data=>{
      // this.formProyecto.setValue({
      //   nombre: data.nombre,
      //   fecha: data.fecha,
      //   descripcion: data.descripcion,
      //   tecnologias: data.tecnologias,
      //   link: data.link
      // })
     
       this.proyectos.push(data.nombre),
        this.proyectos.push(data.fecha),
        this.proyectos.push(data.descripcion),
        this.proyectos.push(data.tecnologias),
        this.proyectos.push(data.link)
      
      console.log( this.proyectos.nombre, 'VER VALOR DE  nombre: proyectos.nombre', data.nombre)
 
      this.formProyecto.reset();
      // this.proyectos.push(data);
      this.msjGuardar = true;
      console.log('EDITAAAAAAAAAAAAAAR PROYECTO');
    })
  //  this.datosPortfolio.editarProyectos(this.formProyecto.value).subscribe(editData=>{

  //    this.formProyecto.setValue({
  //      nombre: this.proyectos.nombre,
  //      fecha: this.proyectos.fecha,
  //      descripcion: this.proyectos.descripcion,
  //      tecnologias: this.proyectos.tecnologias,
  //      link: this.proyectos.link
  //     })
  //     console.log( this.proyectos.nombre, 'VER VALOR DE  nombre: proyectos.nombre')
  //   })
  //   console.log('EDITAAAAAAAAAAAAAAR PROYECTO');
  }
  // borrarProyecto(){
  //   this.datosPortfolio.eliminar("proyectos", this.proyectos.id).subscribe(data=>{
  //     this.proyectos = data
  //     console.log(data, 'VER VALOR DE DATA, ELIMINADO ');
  //     data.delete(data.id)
  //     console.log(data, 'VER VALOR DE DATA,  despues del ELIMINADO ');
  //   })
  // }


  
// get nombre(){
//     return this.formProyecto.get('nombre')
//   }
//   get fecha(){
//     return this.formProyecto.get('fecha')
//   }
//   get descripcion(){
//     return this.formProyecto.get('descripcion')
//   }
//   get tecnologias(){
//     return this.formProyecto.get('tecnologias')
//   }
//   get link(){
//     return this.formProyecto.get('link')
//   }
}
