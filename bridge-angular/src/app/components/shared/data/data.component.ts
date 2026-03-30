import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-data',
  imports: [RouterLink],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css',
})
export class DataComponent {
  dataItems = [
    { id: 1, image: 'assets/data/adata.jpg', alt: 'Data', description: 'ARCHIVE AND DISCUSS DIGITAL TRACES, ENCODED SIGNALS, MAPS, AND SCHEMAS.' },
  ];
}