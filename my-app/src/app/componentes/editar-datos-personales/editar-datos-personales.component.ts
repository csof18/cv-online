import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-editar-datos-personales',
  templateUrl: './editar-datos-personales.component.html',
  styleUrls: ['./editar-datos-personales.component.css']
})
export class EditarDatosPersonalesComponent implements OnInit {
  public mostrarEditar: boolean;
  public datosPersonales:any;
  public formDatosPersona:any;
  public msjGuardar:boolean = false;

  constructor(
    private servicioDeLogin: LoginService,
    public datosPortfolio : PortfolioService
  ){
    this.mostrarEditar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe( datos => {
      if(datos){
        this.mostrarEditar = true;
      }else{
        this.mostrarEditar = false;
      }
    })
    this.formDatosPersona = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      foto_perfil: new FormControl('', [Validators.required])
    })
    this.datosPortfolio.obtenerDatosPersona().subscribe((data)=> {
      this.datosPersonales = data;
    })
  }
  guardarDatosPersonaEditados(){
    this.msjGuardar = false;
    this.datosPortfolio.obtenerDatosPersona().subscribe((data)=> {
      this.datosPersonales = data;
    })
    this.datosPortfolio.editarDatosPersona(this.formDatosPersona.value).subscribe(
      guardarData =>{ 
        this.formDatosPersona.reset();
        this.msjGuardar = true;
        console.log('ESTOY EDITANDO!!!');
  })
  
}
/*
  obtenerDatosPersona(): Observable<DatosPersona> {
    return this.http.get<DatosPersona>(`${this.backURL}/ver/datosPersona`);
  }
  agregarDatosPersona(datosPersona: DatosPersona): Observable<any> {
    return this.http.post<any>(`${this.backURL}/agregar/datosPersona`, datosPersona);
  }
  editarDatosPersona(datosPersona: DatosPersona): Observable<any> {
    return this.http.put<any>(`${this.backURL}/editar/datosPersona`, datosPersona);
  }
*/
  get nombre(){
    return this.datosPersonales.get('nombre')
  }
  get apellido(){
    return this.datosPersonales.get('apellido')
  }
  get titulo(){
    return this.datosPersonales.get('titulo')
  }
  get foto_perfil(){
    return this.datosPersonales.get('foto_perfil')
  }
}







// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { subscribeOn } from 'rxjs';
// import { PortfolioService } from 'src/app/servicios/portfolio.service';

// @Component({
//   selector: 'app-editar-datos-personales',
//   templateUrl: './editar-datos-personales.component.html',
//   styleUrls: ['./editar-datos-personales.component.css']
// })
// export class EditarDatosPersonalesComponent implements OnInit {
//   // datosPersona:any;
//   nombres: any;
// apellidos: any;
// titulos: any;
// fotosPerfil: any;
// datosPersonales:any;
//   public msjGuardar:boolean = false;

//   constructor(
//     public  datosPersona: FormGroup,
//     public fb:FormBuilder,
//     public datosPortfolio : PortfolioService
//   ){

//   }
//   ngOnInit(): void {
    
//     this.datosPersona = this.fb.group({
//       nombre: new FormControl('', [Validators.required]),
//       apellido: new FormControl('', [Validators.required]),
//       titulo: new FormControl('', [Validators.required]),
//       foto_perfil: new FormControl('', [Validators.required])
//     // this.datosPersona = new FormGroup({
//     //   nombre: new FormControl('', [Validators.required]),
//     //   apellido: new FormControl('', [Validators.required]),
//     //   titulo: new FormControl('', [Validators.required]),
//     //   foto_perfil: new FormControl('', [Validators.required])
//     })
//     this.datosPortfolio.obtenerDatos().subscribe(datos=>{
//         this.datosPersonales = datos;
//         console.log(datos, 'VER DATA EN DATOS PERSONALES');
      
//     })
//   }
//   guardarDatosPersona(){
//     // this.datosPortfolio.agregarDatosPersona(this.datosPersona).subscribe(
//     //   data =>{ this.msjGuardar = true })
//   }
// /*
//   obtenerDatosPersona(): Observable<DatosPersona> {
//     return this.http.get<DatosPersona>(`${this.backURL}/ver/datosPersona`);
//   }
//   agregarDatosPersona(datosPersona: DatosPersona): Observable<any> {
//     return this.http.post<any>(`${this.backURL}/agregar/datosPersona`, datosPersona);
//   }
//   editarDatosPersona(datosPersona: DatosPersona): Observable<any> {
//     return this.http.put<any>(`${this.backURL}/editar/datosPersona`, datosPersona);
//   }
// */
//   get nombre(){
//     return this.datosPersona.get('nombre')
//   }
//   get apellido(){
//     return this.datosPersona.get('apellido')
//   }
//   get titulo(){
//     return this.datosPersona.get('titulo')
//   }
//   get foto_perfil(){
//     return this.datosPersona.get('foto_perfil')
//   }
// }
