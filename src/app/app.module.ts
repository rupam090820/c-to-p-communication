import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { Child3Component } from './child3/child3.component';


@NgModule({
  declarations: [
    AppComponent,
    
    Child3Component,
        
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
