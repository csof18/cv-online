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
  @ViewChild('usersPassword')
  usersPass!: ElementRef;
  renderer2!: Renderer2;
  public loginForm = new FormGroup({
    users: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15)
    ])
  });
  constructor(private servicioLogin: LoginService
    ) { 
     //renderer2: Renderer2
  }

  ngOnInit(): void {
  }
  get users(): any{
    return this.loginForm.get('users')
  }
  get password(): any{
    return this.loginForm.get('password')
  }
  onSubmit(): void{
    console.log(this.loginForm.value);
  }
  registrarse() {
    const usersPassword = this.usersPass.nativeElement;
    //this.renderer2.setStyle(usersPassword, style:"color", value:"red")
    console.log('ME TOCARON');
  }
  //style({ background: "red", color: "blue" })
  
  
  /*
  change(): void{
    const usersPassword = this.usersPass.nativeElement;
    console.log(' VER VALOR DE usersPassword', usersPassword);
    this.renderer2.setStyle(usersPassword, style: "color", value: "red");
  }
*/



  /*
  login(){
    //console.log(this.dataEntrante);
    this.servicioLogin.disparadorDeLogin.email({
      datos:this.dataEntrante
    })
  }*/
}