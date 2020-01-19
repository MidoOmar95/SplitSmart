import { Users } from "./Users";
import { Url } from "url";

export class Groups {
    groupId: number;
    groupName: string;
    groupMembers: Users[];
    groupPicture: string;
    groupOwner: Users;
    groupDescription: string;

    constructor() {
        this.groupId = 0;
        this.groupName = '';
        this.groupMembers = [];
        this.groupPicture = '';
        this.groupOwner = new Users;
        this.groupDescription = '';
    }
}