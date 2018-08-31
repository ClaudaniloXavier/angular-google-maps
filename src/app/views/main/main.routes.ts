import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HOME_ROUTES } from './home/home.routes';
import { MAPS_RADAR_ROUTES } from './maps-radar/maps-radar.routes';

export const MAIN_ROUTES: Routes = [{
    path: '',
    component: MainComponent,
    children: [
        ...HOME_ROUTES,
        ...MAPS_RADAR_ROUTES
    ]
}];
