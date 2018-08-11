import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { AlertsModule } from './alerts/alerts.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BooksDBService } from './api-data/api-books-demo';
import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducer } from './reducers';
import { environment } from '../environments/environment';

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
    // HttpClientInMemoryWebApiModule.forRoot(
    //   BooksDBService, {dataEncapsulation: false, delay: 3000}
    // )
    AngularFireModule.initializeApp(environment.firebase, 'bzg-books-app'),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers, {metaReducers: metaReducer}),
    StoreDevtoolsModule.instrument(
      {
        name: 'Bzg Books App',
        logOnly: environment.production,
        maxAge: 30
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
