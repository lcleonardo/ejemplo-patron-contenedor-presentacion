import { NO_ERRORS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UsuarioService } from '@usuario/shared/usuario.service'

import { UsuarioComponent } from './usuario.component'

fdescribe('UsuarioComponent', () => {
  let component: UsuarioComponent
  let fixture: ComponentFixture<UsuarioComponent>
  let usuarioServiceSpy = jasmine.createSpyObj('UsuarioService', [
    'obtener',
    'guardar',
    'editar',
  ])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuarioComponent],
      providers: [{ provide: UsuarioService, useValue: usuarioServiceSpy }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
