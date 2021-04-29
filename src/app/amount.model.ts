export class Amount{
    public name: string;
    public amount: number;
    public total: number;

    constructor(name: string, amount:number, total: number){
        this.name = name;
        this.amount = amount;
        this.total = total;
    }
}