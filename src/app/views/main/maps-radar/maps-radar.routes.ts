import { Routes } from '@angular/router';
import { MAPS_ROUTES } from './maps/maps.routes';

export const MAPS_RADAR_ROUTES: Routes = [
    {
        path: 'maps',
        children: [
            ...MAPS_ROUTES
        ]
    }
];

