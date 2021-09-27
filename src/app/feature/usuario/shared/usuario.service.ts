import { Injectable } from '@angular/core'
import { Usuario } from './model/usuario'

@Injectable()
export class UsuarioService {
  usuarios: Usuario[]

  constructor() {}

  obtener(): Usuario[] {
    let u = new Usuario('Leonardo', 'De la cruz', ['js', 'Java'])
    this.usuarios = [...[], u]
    return this.usuarios
  }

  guardar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }

  editar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }
}
