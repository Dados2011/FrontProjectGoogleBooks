import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FavoritesListComponent } from './main-content/favorites-list/favorites-list.component';
import { BooksListMainComponent } from './main-content/books-list-main/books-list-main.component';
import { CollectionListComponent } from './main-content/collection-list/collection-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    UserMenuComponent,
    MainContentComponent,
    FavoritesListComponent,
    BooksListMainComponent,
    CollectionListComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
