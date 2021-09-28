import { Injectable } from '@angular/core'
import { Usuario } from './model/usuario'

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = []

  constructor() {}

  public obtener(): Usuario[] {
    return this.usuarios
  }

  public guardar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }

  public editar(usuario: Usuario): void {
    this.usuarios.push(usuario)
  }
}
