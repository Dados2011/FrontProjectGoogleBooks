import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesListComponent } from './main-content/favorites-list/favorites-list.component';
import { BooksListMainComponent } from './main-content/books-list-main/books-list-main.component';
import { CollectionListComponent } from './main-content/collection-list/collection-list.component';

export const ROUTES: Routes = [
    { path: '', component: BooksListMainComponent },
    { path: 'favories', component: FavoritesListComponent },
    { path: 'collections', component: CollectionListComponent },
    { path: '**', redirectTo: '' }
];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);

// export const ROUTEPROVIDERS = { provide: LocationStrategy, useClass: HashLocationStrategy };
