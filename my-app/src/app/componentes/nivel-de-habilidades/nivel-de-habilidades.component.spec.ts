import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelDeHabilidadesComponent } from './nivel-de-habilidades.component';

describe('NivelDeHabilidadesComponent', () => {
  let component: NivelDeHabilidadesComponent;
  let fixture: ComponentFixture<NivelDeHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelDeHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelDeHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
