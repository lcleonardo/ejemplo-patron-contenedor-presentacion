import { Component, OnInit } from '@angular/core'
import { Usuario } from '../../shared/model/usuario'
import { UsuarioService } from '../../shared/usuario.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = []
  usuarioSeleccionado: Usuario

  constructor(protected servicio: UsuarioService) {}

  ngOnInit(): void {
    this.obtener()
    this.nuevo()
  }

  nuevo() {
    this.usuarioSeleccionado = Usuario.nuevo()
  }

  obtener(): void {
    this.usuarios = this.servicio.obtener()
  }

  seleccionarUsuario(usuario: Usuario) {
    this.usuarioSeleccionado = usuario.clonar()
  }

  guardar(usuario: Usuario) {
    if (usuario.id) {
      this.servicio.editar(usuario)
    } else {
      this.servicio.guardar(usuario)
    }
    this.nuevo()
    this.obtener()
  }
}
