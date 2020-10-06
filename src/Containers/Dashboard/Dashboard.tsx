
import { inject, observer, Observer } from 'mobx-react';
import React, { Component, useEffect } from 'react';
import { UserStore } from '../../Store/User/User';

interface Props{
    userStore:UserStore
}

@inject('userStore')
@observer
class Dashboard extends React.Component<Props>{
// const Dashboard: React.FunctionComponent<Props> = (Props) => {
    // useEffect(() => {
    //     theuserobject.fetchuser();
        
    // }, []);
    
  componentDidMount(){
        
        this.props.userStore.fetchuser();
        console.log(this.props.userStore.userlist);
        
    }

    
render(){
    
    return (
        <div>
            Welcome to dashboard
            {
                this.props.userStore.userlist.map(user=>user.name)
            }
            {
                this.props.userStore.name
            }
        
            <button onClick={() => {

                localStorage.clear();

            }}>Logout</button>
        </div>
    );
}
}


export default Dashboard;