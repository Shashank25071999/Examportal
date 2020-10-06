import { GuardFunctionRouteProps, GuardToRoute, Next } from 'react-router-guards/dist/types';

const guestguard=(to:GuardToRoute,from:GuardFunctionRouteProps | null, next:Next)=>{
    const token = localStorage.getItem("authtoken");
    
    if(token){
        next.redirect('/dashboard');
    }else{
        next();
    }
}

export default guestguard;