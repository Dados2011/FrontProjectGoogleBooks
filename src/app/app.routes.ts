import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
    {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'
   },
   {
        path: '',
        loadChildren: './core/core.module#CoreModule'
   },
   {
        path: '**',
        redirectTo: ''
    }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// export const ROUTEPROVIDERS = { provide: LocationStrategy, useClass: HashLocationStrategy };
