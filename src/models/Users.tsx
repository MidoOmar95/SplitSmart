import { Url } from "url";

export class Users{
    userId:number;
    username:string;
    displayName:string;
    password:string;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    picture:string;

    constructor() {
        this.userId = 0;
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = ''
        this.email = '';
        this.displayName = '';
        this.phone = '';
        this.picture ='';
    }

}