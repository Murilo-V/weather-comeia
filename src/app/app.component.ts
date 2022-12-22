import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  gridColsBreakpoint: number = 2;
  gridRowsBreakpoint: string = '4:1';
  data = [];

  ngOnInit() {
    this.gridColsBreakpoint = window.innerWidth <= 600 ? 1 : 2;
    this.gridRowsBreakpoint = window.innerWidth <= 600 ? '2:1' : '4:1';
  }
}
