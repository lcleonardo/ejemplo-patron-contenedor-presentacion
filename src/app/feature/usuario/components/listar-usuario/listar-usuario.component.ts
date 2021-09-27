import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Usuario } from '../../shared/model/usuario'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  @Input() usuario: Usuario
  @Input() activo: boolean
  @Output() seleccionado = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  seleccionar() {
    this.seleccionado.emit()
  }
}
