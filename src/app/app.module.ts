/*
File: app.module.ts
Author: Tamás Domán
Copyright: 2022, Tamás Domán
Group: Szoft II N
Date: 2022-11-29
Github: https://github.com/DomanTom07/
Licenc: GNU GPL
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
