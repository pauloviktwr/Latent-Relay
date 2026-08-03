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
  private readonly useMockData = true;

  private readonly mockDevices: Device[] = [
    { id: 1, name: 'Sensor de Porta', status: 'Ativo' },
    { id: 2, name: 'Lâmpada Cozinha', status: 'Inativo' },
    { id: 3, name: 'Câmera Frente', status: 'Ativo' }
  ];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  private loadDevices(): void {
    this.isLoading = true;
    this.errorMessage = '';

    if (this.useMockData) {
      setTimeout(() => {
        this.devices = this.mockDevices;
        this.isLoading = false;
      }, 500);
      return;
    }

    console.log('Antes da chamada');

    this.deviceService.getAll().subscribe({
      next: (data: Device[]) => {
        console.log('Recebeu data:', data);
        this.devices = data;
        this.isLoading = false;
        console.log(this.isLoading);
      },
      error: (err) => {
        console.error('Erro ao carregar devices:', err);
        this.errorMessage = 'Erro ao carregar dispositivos. Por favor, tente novamente.';
        this.isLoading = false;
      }
    });
  }
}
