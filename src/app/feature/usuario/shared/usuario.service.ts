import { Injectable } from '@angular/core'
import { Usuario } from './model/usuario'

@Injectable()
export class UsuarioService {
  usuarios: Usuario[]

  constructor() {}

  obtener(): Usuario[] {
    return this.usuarios
  }

  guardar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }

  editar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }
}
