import React from 'react';
import Formik from 'formik';
import './App.scss';
import Login from './Containers/Login/Login';
import SignUp from './Containers/Signup/SignUp';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
import { observer } from 'mobx-react';
import userStore from './Store/User/User';
import { Provider } from 'mobx-react';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import authguard from './Guards/Authguard';
import guestguard from './Guards/Guestguard';
import { auth } from 'firebase';
const stores = {
  userStore
}

class App extends React.Component {


  render() {
    const token = localStorage.getItem("authtoken");
    return (
      <Provider {...stores}>
        <div className="App">
          <Router>
            <GuardProvider guards={[guestguard]} error={""}>
            <Switch>
              <GuardedRoute path={"/signup"}
                component={SignUp}
                exact>
                <SignUp></SignUp>
              </GuardedRoute>
              <GuardedRoute path={"/login"}
                component={Login}
                exact>
              </GuardedRoute>

            </Switch>
            </GuardProvider>
            <GuardProvider guards={[authguard]} error={""}>
              <Switch>
              <GuardedRoute path="/dashboard"
                component={Dashboard}
                exact>

              </GuardedRoute>
              </Switch>
            </GuardProvider>
            <Route path={'/'} exact>
                        <Redirect to={token ? "/dashboard" : "/login"} />
                    </Route>
          </Router>


        </div>
      </Provider>
    );
  }
}
export default observer(App);
