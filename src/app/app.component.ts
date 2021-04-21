import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Amount } from './amount.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'budget-calculator';
  total: number = 0;
  name = new FormControl(null);
  amount = new FormControl(null);
  record: Amount[] = [];

  ngOnInit(): void{
  
  }

  recordTotal(){
    this.total= this.total + this.amount.value;
    this.record.push(this.name.value, this.amount.value);
  }
}
