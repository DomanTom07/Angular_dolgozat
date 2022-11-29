/*
File: app.component.ts
Author: Tamás Domán
Copyright: 2022, Tamás Domán
Group: Szoft II N
Date: 2022-11-29
Github: https://github.com/DomanTom07/
Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dolgozat2';
  aSide !: number;
  bSide !: number;
  area !: number;

  calcArea():void {
    this.area = 2 * this.aSide * this.bSide;
  }
}
