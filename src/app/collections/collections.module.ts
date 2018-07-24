import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from './routes.collections';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CollectionListComponent]
})
export class CollectionsModule { }
