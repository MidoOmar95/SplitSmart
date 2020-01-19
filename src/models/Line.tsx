import { Item } from "./Item";

export class Line{

    constructor() {
        this.items = []; //one line has multiple items
        this.lineName = '';
        this.linePrice = 0;
        this.lineId = 0;
        this.lineReceipt = 0;
        }

    items : Item[];
    lineName: string;
    linePrice: number;
    lineId:number;
    lineReceipt:number;
}