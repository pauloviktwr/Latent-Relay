import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Place } from '../../../core/models/place.model';
import { PlaceService } from '../../../core/services/place.service';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})

export class PlacesComponent implements OnInit {
  placeItems: Place[] = [];

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.getAll().subscribe({
      next: (data) => this.placeItems = data,
      error: (err) => console.error('Erro ao carregar places', err)
    });
  }
}
