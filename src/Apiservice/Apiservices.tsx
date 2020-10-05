import React from 'react';
import axios from 'axios';
export default class ApiServices{
    private constructor(){

    }

    private baseurl="https://examportalreactapp.firebaseio.com/";
    private static instance:ApiServices;

    public static getinstance(){
        if(!this.instance){
            this.instance=new ApiServices();
        }

        return this.instance;
    }

    public post(url:string,data:any,headers?:any){

    }

    public get(url:string){
        const token=localStorage.getItem("authtoken");
        return axios.get(this.baseurl+url+token);
    }
}