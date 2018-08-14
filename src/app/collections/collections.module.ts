import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from './routes.collections';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { CollectionDetailsComponent } from './containers/collection-details/collection-details.component';
import { CardBookCollectionComponent } from './components/card-book-collection/card-book-collection.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionListComponent, CardCollectionComponent, CollectionDetailsComponent, CardBookCollectionComponent]
})
export class CollectionsModule { }
