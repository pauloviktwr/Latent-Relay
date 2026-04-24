import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceService } from '../../core/services/device.service';
import { Device } from '../../core/models/device.model';

@Component({
  selector: 'app-device-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent implements OnInit {
  devices: Device[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  private loadDevices(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.deviceService.getAll().subscribe({
      next: (data: Device[]) => {
        this.devices = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Erro ao carregar dispositivos. Por favor, tente novamente.';
        this.isLoading = false;
        console.error('Erro ao carregar devices:', err);
      }
    });
  }
}
