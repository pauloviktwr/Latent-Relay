import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { Data } from '../../../core/models/data.model';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  dataItems: Data[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAll().subscribe({
      next: (data) => this.dataItems = data,
      error: (err) => console.error('Erro ao carregar data', err)
    });
  }
}
