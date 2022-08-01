import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})

export class EditarAcercaDeComponent implements OnInit {
  public mostrarEditar: boolean;
  constructor(private servicioDeLogin: LoginService) {
    this.mostrarEditar = false;
  }

  ngOnInit(): void {
    this.servicioDeLogin.logueado.subscribe( data => {
      if(data){
        this.mostrarEditar = true;
      }else{
        this.mostrarEditar = false;
      }
    })
  }

  public formAcercaDe = new FormControl({
    acerca_de: new FormControl('', [Validators.required])
  })

  get acerca_de(){
    return this.formAcercaDe.get('acerca_de')
  }
}
