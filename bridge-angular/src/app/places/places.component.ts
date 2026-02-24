import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent {
  places = [
    {
      id: 1,
      image: '/assets/places/bf74ee5a968e67e0de2abafb115f2e52.jpg',
      alt: 'Featured Place 1',
      description: 'Example location with user stories, images, maps, etc...'
    },
    {
      id: 2,
      image: '/assets/places/a.jpg',
      alt: 'Featured Place 2',
      description: 'Example location with user stories, images, maps, etc...'
    },
    {
      id: 3,
      image: '/assets/places/b.jpg',
      alt: 'Featured Place 3',
      description: 'Example location with user stories, images, maps, etc...'
    }
  ];
}
