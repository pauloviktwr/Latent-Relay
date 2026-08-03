import { Routes } from '@angular/router';
import { DevicesComponent } from './components/shared/devices/devices.component';
import { PlacesComponent } from './components/shared/places/places.component';
import { DataComponent } from './components/shared/data/data.component';

export const routes: Routes = [
  { path: '', redirectTo: 'devices', pathMatch: 'full' },
  { path: 'devices', component: DevicesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'data', component: DataComponent },
];
