import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Components from './components/index';
import ParticlesConfig from '../assets/json/particlesjs-config.json';

declare var particlesJS: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ...Components],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngOnInit() {
    particlesJS('particles-js', ParticlesConfig, function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
