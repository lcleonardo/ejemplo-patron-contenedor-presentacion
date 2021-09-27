import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsuarioRoutingModule } from './usuario-routing.module'
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component'
import { UsuarioComponent } from './components/usuario/usuario.component'
import { FormsModule } from '@angular/forms'
import { GuardarComponent } from './components/guardar/guardar.component'
import { UsuarioService } from './shared/usuario.service'

@NgModule({
  declarations: [UsuarioComponent, ListarUsuarioComponent, GuardarComponent],
  imports: [FormsModule, CommonModule, UsuarioRoutingModule],
  providers: [UsuarioService],
})
export class UsuarioModule {}
