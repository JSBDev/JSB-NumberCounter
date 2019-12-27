import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JSBNumCounterModule } from 'projects/jsbnum-counter/src/public-api';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JSBNumCounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
