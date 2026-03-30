import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-devices',
  imports: [RouterLink],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css',
})
export class DevicesComponent {
  deviceItems = [
    { id: 1, image: 'assets/devices/ctrlaltdel.jpg', alt: 'Devices', description: 'EXPLORE EQUIPMENT, TERMINALS, AND VINTAGE HARDWARE USED IN THE FIELD.' },
  ];
}