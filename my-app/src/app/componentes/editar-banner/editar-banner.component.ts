import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-banner',
  templateUrl: './editar-banner.component.html',
  styleUrls: ['./editar-banner.component.css']
})
export class EditarBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public formBanner = new FormGroup({
    banner: new FormControl('', [Validators.required])
  })

  get banner(){
    return this.formBanner.get('banner')
  }
  get texto_banner(){
    return this.formBanner.get('texto_banner')
  }


}
