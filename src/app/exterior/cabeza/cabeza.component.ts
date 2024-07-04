import { Component } from '@angular/core';
import { CraneoComponent } from '../../interior/craneo/craneo.component';

@Component({
  selector: 'app-cabeza',
  standalone: true,
  imports: [CraneoComponent],
  templateUrl: './cabeza.component.html',
  styleUrl: './cabeza.component.css'
})
export class CabezaComponent {

}
