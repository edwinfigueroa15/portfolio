import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particle.component.html',
  styleUrl: './particle.component.scss'
})
export class ParticleComponent {
  array = new Array(100).fill(0);
}
