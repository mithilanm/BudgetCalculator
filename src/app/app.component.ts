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
  chosen = { name: "", amount: 0, index: 0};
  editMode = false;
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
    if(this.editMode){
      this.amountService.updateAmount(this.chosen.index, this.recordForm.value);
      this.editMode = false;
    } else {
      this.total= this.total + this.recordForm.value.amount;
      this.amountService.addAmount(this.recordForm.value);
    }
    this.recordForm.reset();
  }

  itemClicked(item: Amount, index: number){
    this.chosen.name=item.name;
    this.chosen.amount = item.amount;
    this.chosen.index = index;
    this.editMode = true;
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