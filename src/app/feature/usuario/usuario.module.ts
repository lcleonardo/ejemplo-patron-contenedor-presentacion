import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsuarioRoutingModule } from './usuario-routing.module'
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component'
import { UsuarioComponent } from './components/usuario/usuario.component'
import { FormsModule } from '@angular/forms'
import { UsuarioService } from './shared/usuario.service'
import { GuardarUsuarioComponent } from './components/guardar-usuarios/guardar-usuario.component'

@NgModule({
  declarations: [UsuarioComponent, ListarUsuarioComponent, GuardarUsuarioComponent],
  imports: [FormsModule, CommonModule, UsuarioRoutingModule],
  providers: [UsuarioService],
})
export class UsuarioModule {}
