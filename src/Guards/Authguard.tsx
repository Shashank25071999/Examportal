import { GuardFunctionRouteProps, GuardToRoute, Next } from 'react-router-guards/dist/types';
const authguard=(to:GuardToRoute,from:GuardFunctionRouteProps | null, next:Next)=>{
    const token = localStorage.getItem("authtoken");

    if(token){
        next();
    }else{
        next.redirect('/login');
    }
}

export default authguard;