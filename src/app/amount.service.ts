import { EventEmitter } from "@angular/core";
import { Amount } from "./amount.model";

export class AmountService{
    amountChanged = new EventEmitter<Amount[]>();
    private amount: Amount[] =[];
    
    getAmount(){
        return this.amount.slice();
    }

    addAmount(amount: Amount){
        this.amount.push(amount);
        this.amountChanged.next(this.amount.slice());
    }
}