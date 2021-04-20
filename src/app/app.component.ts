import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'budget-calculator';
  total: number = 0;
  increment = new FormControl(null);
  decrement = new FormControl(null);

  incrementTotal(){
    this.total= this.total + this.increment.value;
  }

  decrementTotal(){
    this.total= this.total - this.decrement.value;
  }
}
