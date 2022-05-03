import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    nombre: new FormControl('', [Validators.minLength(4)]),
      usuario: new FormControl('', [Validators.email]),
      contrasenia: new FormControl('', [Validators.required])
  });
  constructor() { 
   // this.buildForm();
  }

  ngOnInit(): void {
  }
get nombre(): any{
    return this.form.get('nombre',)

}
onSubmit(): void{
  console.log(this.form.value);
}
setValue(){
  this.form.setValue({nombre:'marta', contrasenia: 'conga'});
}
 /* private buildForm(){
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.maxLength(8)]),
      usuario: new FormControl('', [Validators.email]),
      contrasenia: new FormControl('', [Validators.required])
    });
    this.form.valueChanges
    .pipe(
      debounceTime(400)
      )
    }
    */
}



/*
  formularioLogin = new FormGroup({
    usuarioMail: new FormControl('', Validators.required),
    usuarioPassword: new FormControl('', Validators.required)
  })*/