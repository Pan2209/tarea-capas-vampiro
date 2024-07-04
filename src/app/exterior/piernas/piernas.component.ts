import { Component } from '@angular/core';
import { FemurComponent } from '../../interior/femur/femur.component';

@Component({
  selector: 'app-piernas',
  standalone: true,
  imports: [FemurComponent],
  templateUrl: './piernas.component.html',
  styleUrl: './piernas.component.css'
})
export class PiernasComponent {

}
