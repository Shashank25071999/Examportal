import {action, computed, observable, runInAction} from 'mobx';
import ApiServices from '../../Apiservice/Apiservices';
import { User } from '../../Modal/User/User';



  class UserStore{
    @observable userlist:User[]=[];
    @observable name!:string;

    

    constructor(){
        User._store=this;
    }

    @action 
    addUser(user:User){
        this.userlist.push(user);
    }

    @action
    fetchuser(){
        const userli:any[]=[];
        ApiServices.getinstance().get("Users/.json?auth=").then(res=>{

            runInAction(()=>{
                for(var i in res.data){
                    const user=User.fromJson(res.data[i]);
                    this.userlist.push(user);
                }     
               
               this.name="shashank sahai state updated";
               console.log(this.name);
               console.log(this.userlist.length);
            });
            
            
        });
    }

}

export default new UserStore();
export {UserStore}