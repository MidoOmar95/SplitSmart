import { Users } from "./Users";

export class Item {

    
    constructor(claimant) {
        this.itemClaimant = claimant;
        this.itemLine = 0;
        this.itemId = 0;
    }
    itemId:number
    itemClaimant : Users;
    itemLine:number;
}