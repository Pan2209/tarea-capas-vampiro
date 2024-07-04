import { Component } from '@angular/core';
import { PiesComponent } from '../../interior/pies/pies.component';
import { PiernasComponent } from '../piernas/piernas.component';

@Component({
  selector: 'app-zapatos',
  standalone: true,
  imports: [PiesComponent],
  templateUrl: './zapatos.component.html',
  styleUrl: './zapatos.component.css'
})
export class ZapatosComponent {

}
