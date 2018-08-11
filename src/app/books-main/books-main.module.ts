import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from './containers/book-detail/book-detail.component';
import { BooksListMainComponent } from './containers/book-list-main/book-list-main.component';
import { routes } from './routes.books-main';
import { BookInfoComponent } from './components/book-info/book-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookDetailComponent, BooksListMainComponent, BookInfoComponent]
})
export class BooksMainModule { }
