export class Usuario {
  nombre: string = ''
  apellido: string = ''
  etiquetas: string[] = []
  id?: number

  constructor(
    nombre: string,
    apellido: string,
    etiquetas: string[],
    id?: number,
  ) {
    this.nombre = nombre
    this.apellido = apellido
    this.etiquetas = etiquetas
    this.id = id
  }

  get nombreCompleto(): string {
    return `${this.nombre}  ${this.apellido}`
  }

  static nuevo(): Usuario {
    return new Usuario('', '', [])
  }

  clonar(): Usuario {
    return new Usuario(this.nombre, this.apellido, this.etiquetas)
  }
}
