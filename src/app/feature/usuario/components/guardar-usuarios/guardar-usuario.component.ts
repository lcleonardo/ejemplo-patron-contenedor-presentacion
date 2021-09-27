import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Usuario } from '../../shared/model/usuario'

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar-usuario.component.html',
  styleUrls: ['./guardar-usuario.component.css'],
})
export class GuardarUsuarioComponent implements OnInit {
  @Input() usuario: Usuario
  @Output() guardar = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  guadar() {
    this.guardar.emit(this.usuario)
  }
}
