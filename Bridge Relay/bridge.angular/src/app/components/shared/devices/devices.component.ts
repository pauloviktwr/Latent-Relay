import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceFormComponent } from '../../device-form.component/device-form.component';
import { DeviceListComponent } from '../../device-list/device-list.component';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule, DeviceFormComponent, DeviceListComponent],
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css'],
})
export class DevicesComponent {}
