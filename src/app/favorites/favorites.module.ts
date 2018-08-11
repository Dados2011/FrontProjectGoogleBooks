import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesListComponent } from './containers/favorites-list/favorites-list.component';
import { routes } from './routes.favorites';
import { CardBookComponent } from './components/card-book/card-book.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FavoritesListComponent, CardBookComponent]
})
export class FavoritesModule { }
