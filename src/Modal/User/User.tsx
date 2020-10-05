import { action, observable } from 'mobx';
import {UserStore} from '../../Store/User/User';




export class User{
@observable number!:string;
@observable name!:string;
@observable email!:string;
@observable color!:boolean;


public static _store:UserStore;

//for changing the color of a instance
@action
changecolor=()=>{
    this.color=!this.color;
}

static fromJson(json:any){
    const user=new User();
    user.name=json['name'];
    user.number=json['phonenumber'];
    user.email=json['email'];
    return user;
}

}