import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {
  public formCursos: any;
  public cursos: any;
  public msjGuardar:boolean = false;
  constructor(public datosPortfolio : PortfolioService) { }

  ngOnInit(): void {
    this.formCursos = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      fecha_inicio: new FormControl('', [Validators.required]),
      fecha_fin: new FormControl('', [Validators.required]),
      establecimiento: new FormControl('', [Validators.required])
    })
    this.datosPortfolio.obtenerCursos().subscribe((data)=>{
      this.cursos = data;
    })
  }

  guardarCurso(){
    this.msjGuardar = false;
    this.datosPortfolio.agregarCursos(this.formCursos.value).subscribe(valoresData=>{
      this.formCursos.reset();
      this.msjGuardar = true;
    })
  }


// get titulo(){
//     return this.formCursos.get('titulo')
//   }
//   get fecha_inicio(){
//     return this.formCursos.get('fecha_inicio')
//   }
//   get fecha_fin(){
//     return this.formCursos.get('fecha_fin')
//   }
//   get establecimiento(){
//     return this.formCursos.get('establecimiento')
//   }

}
