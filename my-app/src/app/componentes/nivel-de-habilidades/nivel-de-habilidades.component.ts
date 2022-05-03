import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivel-de-habilidades',
  templateUrl: './nivel-de-habilidades.component.html',
  styleUrls: ['./nivel-de-habilidades.component.css']
})
export class NivelDeHabilidadesComponent implements OnInit {
  estrellas: number[] = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }
}