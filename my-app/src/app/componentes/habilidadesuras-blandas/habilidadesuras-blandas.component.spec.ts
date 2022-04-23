import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesurasBlandasComponent } from './habilidadesuras-blandas.component';

describe('HabilidadesurasBlandasComponent', () => {
  let component: HabilidadesurasBlandasComponent;
  let fixture: ComponentFixture<HabilidadesurasBlandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadesurasBlandasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesurasBlandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
