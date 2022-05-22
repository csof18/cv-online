import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-acerca-de',
  templateUrl: './editar-acerca-de.component.html',
  styleUrls: ['./editar-acerca-de.component.css']
})
export class EditarAcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formAcercaDe = new FormControl({
    acerca_de: new FormControl('', [Validators.required])
  })

  get acerca_de(){
    return this.formAcercaDe.get('acerca_de')
  }
}
