import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
  render(){
    return (
      <div className="Login">
        <h1 className="Login-title">Login</h1>
        <p className="Login-desc">Please insert your login informations.</p>
        <form onSubmit={(event)=>this.props.handleLogin(event)}>
          <input type="text" placeholder="Ime" required onChange={(event)=>this.props.handleName(event)}/>
          <input type="mail" placeholder="E-mail" required onChange={(event)=>this.props.handleMail(event)}/>
          <input type="password" placeholder="Lozinka" required />
          <input type="submit" value="Log in"/>
        </form>
      </div>
    );
  }
}
export default Login;