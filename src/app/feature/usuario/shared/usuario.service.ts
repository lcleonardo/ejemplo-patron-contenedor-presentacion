import { Injectable } from '@angular/core'
import { Usuario } from './model/usuario'

@Injectable()
export class UsuarioService {
  constructor() {}

  obtener(): Usuario[] {
    return []
  }
  guardar(usuario: Usuario) {}
  editar(usuario: Usuario) {}
}
