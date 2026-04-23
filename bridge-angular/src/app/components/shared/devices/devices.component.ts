import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DeviceService } from '../../../core/services/device.service';
import { Device } from '../../../core/models/device.model';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent implements OnInit {
  deviceItems: Device[] = [];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.getAll().subscribe({
      next: (data) => this.deviceItems = data,
      error: (err) => console.error('Erro ao carregar devices', err)
    });
  }
}
