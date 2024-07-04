import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabezaComponent } from './exterior/cabeza/cabeza.component';
import { PechoComponent } from './exterior/pecho/pecho.component';
import { PiernasComponent } from './exterior/piernas/piernas.component';
import { ZapatosComponent } from './exterior/zapatos/zapatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabezaComponent, PechoComponent, PiernasComponent, ZapatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarea-capas-vampiro';
}
