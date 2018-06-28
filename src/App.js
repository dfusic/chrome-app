import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from './history';
import './App.css';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';
import Messages from './Containers/Messages/Messages';

class App extends Component {
  state = {
    loggedIn: false,
    person: {
      name: '',
      mail: ''
    },
    currentPath: history.location.pathname
  }
  // get email
  emailHandler = event => {
    let emailPerson = this.state.person;
    let emailPersonCopy = {...emailPerson};

    this.setState({
      person: {
        name: emailPersonCopy.name,
        mail: event.target.value
      }
    })
  }
  // get name
  nameHandler = event => {
    let namePerson = this.state.person;
    let namePersonCopy = {...namePerson};
    this.setState({
      person: {
        name: event.target.value,
        mail: namePersonCopy.mail
      }
    })
  }
  // go to /profile if user fills out form
  handleLogin = event => {
    event.preventDefault();
    history.push('/profile');
  }
  componentDidMount(){
    history.push('/login');
  }
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route 
            path="/login" 
            render={() => 
              <Login 
              handleLogin={(event)=>this.handleLogin(event)}
              handleName={(event)=>this.nameHandler(event)}
              handleMail={(event)=>this.emailHandler(event)}
              />}/>
              <Route 
              path="/profile"
              exact
              render={()=>
              <Profile 
              user={this.state.person}
              />
              }/>
              <Route
              path="/messages" 
              render={()=>
                <Messages />}
              />
              >
          </Switch>
        </Router>
    );
  }
}
export default App;
