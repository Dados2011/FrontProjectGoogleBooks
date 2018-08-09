import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardsService } from './auth/services/guards/auth-guards.service';

export const ROUTES: Routes = [
   {
        path: '',
        loadChildren: './core/core.module#CoreModule',
        canActivate: [AuthGuardsService]
   },
   {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// export const ROUTEPROVIDERS = { provide: LocationStrategy, useClass: HashLocationStrategy };
