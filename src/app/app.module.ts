import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinnerModule } from './dinner/dinner.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
