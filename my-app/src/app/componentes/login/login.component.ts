import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@ViewChild('usersPassword')
  usersPass!: ElementRef;
  public loginForm = new FormGroup({
    users: new FormControl('', [
        Validators.required,
       // Validators.email
      ]),
    password: new FormControl('', [
      Validators.required,
      //Validators.minLength(5),
      Validators.maxLength(15)
    ])
  });
  constructor(private servicioDeLogin: LoginService) { }

  ngOnInit(): void {
  }
  get users(): any{
    return this.loginForm.get('users');
  }
  get password(): any{
    return this.loginForm.get('password');
  }
  onSubmit(): void{
    this.servicioDeLogin.login().subscribe( data => {
      // aca desestructuro los datos de la respuesta del login a la api
      const { success , token } = data;
      if(success){
        //esto se va a usar cuando este el backend andando, para que en algun momento se use bien.
        // mas adelante con la api terminada 
        sessionStorage.setItem('curriculum_logueado_token', token);
        // emito el evento de logueado para los botones, esto emite un true, y los botones quedan escondidos
        this.servicioDeLogin.emitirLogueado();
        console.log(this.servicioDeLogin.logueado, "SERVICIODELOGRADO");
      } 
    })
  }


 

  //public cerrarSecion:boolean = false;
  //public login: boolean = true;
  public ingresar: boolean = true;
  public registro: boolean = true;
  public mostrarEditar: boolean = false;
  public cerrar: boolean = false;

  //BOTON INGRESAR PARA EDITAR CV
  mostrarEdicion(){
    this.servicioDeLogin.emitirLogueado()
  if(this.mostrarEditar){
    this.registro=true;
    this.cerrar=false;
    console.log('estoy en IF cerrar', this.cerrar);;
  } else{
    this.ingresar = false;
    this.cerrar = true;
    console.log('estoy en ELSE cerrar', this.cerrar);
  }
}

deslogearse(){
  this.servicioDeLogin.emitirDeslogueado();
  this.ingresar=true;
  this.cerrar=false;
}
  
}