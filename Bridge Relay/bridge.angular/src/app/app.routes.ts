import { Routes } from '@angular/router';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DevicesComponent } from './components/shared/devices/devices.component';
import { PlacesComponent } from './components/shared/places/places.component';
import { DataComponent } from './components/shared/data/data.component';
import { HomeComponent } from './screens/home/home';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: DeviceListComponent },
  { path: 'devices', component: DevicesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'data', component: DataComponent }
];
