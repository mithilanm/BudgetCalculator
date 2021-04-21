import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Amount } from "./amount.model";

@Injectable()
export class AmountService{
    amountChanged = new Subject<Amount[]>();
    private amount: Amount[] =[];
    
    getAmount(){
        return this.amount.slice();
    }

    addAmount(amount: Amount){
        this.amount.push(amount);
        this.amountChanged.next(this.amount.slice());
    }
}