import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sonde',
        loadComponent: () => import('./components/sondecomponent/sondecomponent').then(m => m.SensorComponent)
    }, 
    {
        path: 'productivity',
        loadComponent: () => import('./components/productivity-tracker-component/productivity-tracker-component').then(m => m.ProductivityTrackerComponent)
    }
];
