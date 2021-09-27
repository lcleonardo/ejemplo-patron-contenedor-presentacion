import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Usuario } from '../../shared/model/usuario'

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css'],
})
export class GuardarComponent implements OnInit {
  @Input() usuario: Usuario
  @Output() guardar = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  guadar() {
    this.guardar.emit(this.usuario)
  }
}
