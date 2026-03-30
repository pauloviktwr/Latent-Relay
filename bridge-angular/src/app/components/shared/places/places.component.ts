import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-places',
  imports: [RouterLink],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  placeItems = [
    { id: 1, image: 'assets/places/bf74ee5a968e67e0de2abafb115f2e52.jpg', alt: 'Places', description: 'TRACK LOCATIONS AND ANOMALOUS SITES CONNECTED TO THE BROADCAST GRID.' },
  ];
}