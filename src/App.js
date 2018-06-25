import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';


class App extends Component {
  state = {
    name: '',
    email: ''
  };

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={Login} />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
