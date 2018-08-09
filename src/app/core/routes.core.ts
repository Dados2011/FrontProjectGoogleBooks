import { Routes } from '@angular/router';
import { CoreComponent } from './containers/core/core.component';
import { AuthGuardsService } from '../auth/services/guards/auth-guards.service';

export const routes: Routes = [
    {
        path: 'main',
        component: CoreComponent,
        canActivate: [AuthGuardsService],
        children: [
            {
                path: 'books',
                loadChildren: '../books-main/books-main.module#BooksMainModule',
                canActivate: [AuthGuardsService]
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule',
                canActivate: [AuthGuardsService]
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule',
                canActivate: [AuthGuardsService]
            },
            {
                path: '', redirectTo: 'books', pathMatch: 'full'
            }
        ]
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
];
