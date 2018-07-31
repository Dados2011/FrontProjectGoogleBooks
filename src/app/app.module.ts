import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
    AlertsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
