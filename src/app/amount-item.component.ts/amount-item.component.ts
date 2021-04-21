import { Component, Input, OnInit } from "@angular/core";
import { Amount } from "../amount.model";
import { AmountService } from "../amount.service";


@Component({
        selector: 'app-amount-item',
        templateUrl: './amount-item.component.html',
        styleUrls: ['./amount-item.component.css']
})
export class AmountItemComponent implements OnInit{
    @Input() amount: Amount;
    constructor(private amountService: AmountService){}

    ngOnInit(): void{

    }
};