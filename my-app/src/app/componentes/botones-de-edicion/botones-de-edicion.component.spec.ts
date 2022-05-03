import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesDeEdicionComponent } from './botones-de-edicion.component';

describe('BotonesDeEdicionComponent', () => {
  let component: BotonesDeEdicionComponent;
  let fixture: ComponentFixture<BotonesDeEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesDeEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesDeEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
