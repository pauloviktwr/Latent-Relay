import { Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { PlacesComponent } from './places/places.component';
import { DataComponent } from './data/data.component';

export const routes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'data', component: DataComponent }
];
