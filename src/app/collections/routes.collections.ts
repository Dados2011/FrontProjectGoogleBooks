import { Routes } from '@angular/router';
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { CollectionDetailsComponent } from './containers/collection-details/collection-details.component';

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'detail/:key',
        component: CollectionDetailsComponent
    },
];
