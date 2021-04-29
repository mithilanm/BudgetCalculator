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
  total: number = 0.00;
  recordForm: FormGroup;
  record: Amount[];
  textName: string;
  textAmount: number;
  originalAmount: number;
  index: number;
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

  onSubmit(){
    if(this.editMode){
      this.total = this.total - this.originalAmount;
      this.amountService.updateAmount(this.index, this.recordForm.value);
      this.editMode = false;
    } else {
      this.amountService.addAmount(this.recordForm.value);
    }
    this.total= this.total + this.recordForm.value.amount;
    this.recordForm.reset();
  }

  itemClicked(item: Amount, index: number){
    this.textName=item.name;
    this.textAmount, this.originalAmount = item.amount;
    this.index = index;
    this.editMode = true;
  }

  onDelete(){
    this.total = this.total - this.originalAmount;
    this.amountService.deleteAmount(this.index);
    this.editMode = false;
    this.recordForm.reset();
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