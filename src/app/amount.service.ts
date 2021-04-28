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

    updateAmount(index: number, newAmount: Amount){
        this.amount[index] = newAmount;
        this.amountChanged.next(this.amount.slice());
    }

}