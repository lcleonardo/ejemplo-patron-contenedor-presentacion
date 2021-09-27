import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  @Input() nombre: string
  @Input() apellido: string
  @Input() etiquetas: string

  constructor() {}

  ngOnInit(): void {}
}
