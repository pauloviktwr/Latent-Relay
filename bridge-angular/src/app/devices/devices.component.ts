import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {
  devices = [
    {
      id: 1,
      image: '/assets/devices/ressonance.jpg',
      alt: 'Resonance Device',
      description: 'Example device description and user-submitted info...'
    },
    {
      id: 2,
      image: '/assets/black.jpg',
      alt: 'Black Device',
      description: 'Example device description and user-submitted info...'
    }
  ];
}
