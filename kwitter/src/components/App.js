import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { 
  LoginForm, 
  UserProfile,
  CreateUser,
  MainPage,
  PasswordReset
} from ".";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" 
          render={() => <LoginForm />} />
        <Route exact path="/create" 
          render={() => <CreateUser />} />
        <Route exact path="/home" 
          render={() => <MainPage />} />
        <Route exact path="/profile" 
          render={() => <UserProfile />} />
        <Route exact path="/reset" 
          render={() => <PasswordReset />} />
      </Switch>
    );
  }
}

export default App;
