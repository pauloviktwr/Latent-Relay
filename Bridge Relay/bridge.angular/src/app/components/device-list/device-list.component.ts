import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  useMockData = true;

  private readonly mockDevices: Device[] = [
    { id: 1, name: 'ANGULAR COMPONENT DEVICE-LIST TEST', slotToAssetMap: { TOP: 'lens_thermal' } },
    { id: 2, name: 'ANGULAR COMPONENT DEVICE-LIST TEST 2', slotToAssetMap: { SIDE: 'sensor_ir' } },
    { id: 3, name: 'ANGULAR COMPONENT DEVICE-LIST TEST 3', slotToAssetMap: { TOP: 'lens_thermal', SIDE: 'sensor_ir' } }
  ];

  constructor(private deviceService: DeviceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadDevices();
    this.devices = this.mockDevices;
    this.cdr.detectChanges();
  }

  toggleMockData(): void {
    this.useMockData = !this.useMockData;
    this.loadDevices();
  }

  private loadDevices(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();
    console.log(this.isLoading);

    if (this.useMockData) {
      console.log('iniciando loading mocks');

      setTimeout(() => {
        this.devices = this.mockDevices;
        console.log('aplicando mock');

        this.isLoading = false;
        console.log(this.isLoading);
        this.cdr.detectChanges();
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
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao carregar devices:', err);
        this.errorMessage = 'Erro ao carregar dispositivos. Por favor, tente novamente.';
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
