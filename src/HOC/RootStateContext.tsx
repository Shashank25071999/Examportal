import React from 'react';

import {UserStore} from '../Store/User/User';


interface RootStateContextValue{
    userStore:UserStore
}


const RootStateContext=React.createContext<RootStateContextValue>({} as RootStateContextValue);

const userStore=new UserStore();

export const RootStateprovider:React.FC<React.PropsWithChildren<{}>>=({children})=>{
    return (
        <RootStateContext.Provider value={{userStore}}>
            {children}
        </RootStateContext.Provider>
    );
};


// export const userRootStore= () => React.useContext(RootStateContext);