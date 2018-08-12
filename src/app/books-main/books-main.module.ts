import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { BooksListMainComponent } from './containers/book-list-main/book-list-main.component';
import { routes } from './routes.books-main';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { AddCollectionComponent } from './components/add-collection/add-collection.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BookDetailComponent, BooksListMainComponent, BookInfoComponent, AddCollectionComponent]
})
export class BooksMainModule { }
