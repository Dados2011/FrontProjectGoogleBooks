import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { AlertsModule } from './alerts/alerts.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { HttpClientInMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksDBService } from './api-data/api-books-demo';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    BrowserAnimationsModule,
    AlertsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BooksDBService, {dataEncapsulation: false, delay: 3000}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
