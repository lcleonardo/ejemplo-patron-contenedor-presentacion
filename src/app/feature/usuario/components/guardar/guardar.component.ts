import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css'],
})
export class GuardarComponent implements OnInit {
  @Input() vm: {
    nombre: string
    apellido: string
    etiquetas: string
  }

  @Output() guardar = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  guadar() {
    this.guardar.emit(this.vm)
  }
}
