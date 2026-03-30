import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  navItems = [
    { id: 1, title: 'devices', route: '/devices', image: 'assets/devices/ctrlaltdel.jpg', alt: 'Devices' },
    { id: 2, title: 'places', route: '/places', image: 'assets/places/bf74ee5a968e67e0de2abafb115f2e52.jpg', alt: 'Places' },
    { id: 3, title: 'data', route: '/data', image: 'assets/data/adata.jpg', alt: 'Data' },
  ];
}
