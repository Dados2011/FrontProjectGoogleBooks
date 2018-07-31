import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { AlertsModule } from './alerts/alerts.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    AlertsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
