import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoPacientesComponent } from './gerenciamento-pacientes.component';

describe('GerenciamentoPacientesComponent', () => {
  let component: GerenciamentoPacientesComponent;
  let fixture: ComponentFixture<GerenciamentoPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
