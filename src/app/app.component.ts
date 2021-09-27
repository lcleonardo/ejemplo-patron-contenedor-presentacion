import { Component } from '@angular/core'
import { MenuItem } from '@core/modelo/menu-item'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app-base'
  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/usuarios', nombre: 'usuarios' },
  ]
}
