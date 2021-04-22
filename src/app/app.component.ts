import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Amount } from './amount.model';
import { AmountService } from './amount.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'budget-calculator';
  total: number = 0;
  recordForm: FormGroup;
  record: Amount[];

  constructor(private amountService: AmountService){

  }


  ngOnInit(): void{
    this.record = this.amountService.getAmount();
    this.amountService.amountChanged
    .subscribe(
      (amount: Amount[])=> {
        this.record = amount;
      }
    );
    this.initForm();
    this.record = this.amountService.getAmount();
  }

  recordTotal(){
    this.total= this.total + this.recordForm.value.amount;
    this.amountService.addAmount(this.recordForm.value);
  }

  private initForm(){
    let recordName = '';
    let recordAmount = '';

    this.recordForm = new FormGroup({
      'name': new FormControl(recordName, Validators.required),
      'amount': new FormControl(recordAmount, Validators.required)
    })
  }
}
