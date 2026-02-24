import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  dataItems = [
    {
      id: 1,
      image: '/assets/transduction-sequence phases.jpg',
      alt: 'Transduction Sequence',
      description: 'Schema, signal, or digital artifact description...'
    },
    {
      id: 2,
      image: '/assets/data/adata.jpg',
      alt: 'Data Artifact',
      description: 'Schema, signal, or digital artifact description...'
    },
    {
      id: 3,
      image: '/assets/8c21d5f840b2bbe5c40002f5e3d5c9fc.jpg',
      alt: 'Data Artifact 2',
      description: 'Schema, signal, or digital artifact description...'
    }
  ];
}
