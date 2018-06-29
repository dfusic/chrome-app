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
    },messages: [
      {
        key: 'isnfgoisdfg',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, error!'
      },
      {
        key: 'dfjdhgjdgj',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ad ut! Natus iusto eius temporibus quasi cum, iste architecto unde.'
      },
      {
        key: 'fghgfhdefghdfh',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aut ullam? Alias, ducimus fugiat? Aliquid illo ipsa quaerat mollitia quis quas quia consequuntur, voluptas assumenda.'
      },
    ],
    remainingLength: 500,
    currentMessage: '',
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
  handleNewMessage = event => {
    event.preventDefault();
    console.log('Submited');
    // copy state
    let newMsgState = this.state.messages;
    // get current message
    let currentMessage = this.state.currentMessage;
    // generate unique key for each message
    // transform message to lower case and append profile object length to it / should be unique enough
    let currentMessageKey = currentMessage.toLowerCase() + newMsgState.length;
    this.setState({
      messages: [
        ...newMsgState,
        {
          'key': currentMessageKey,
          'message': currentMessage
        },
      ],
      remainingLength: 500,
      currentMessage: ''
    });
  }

  handleSingleMessage = event => {
    let currentMessage = event.target.value;
    let remainingMessageLength = 500 - event.target.value.length;
    this.setState({
      currentMessage: currentMessage,
      remainingLength: remainingMessageLength
    })
  }
//remove message
removeMsg = (event, key) => {
  let clickedElement = this.state.messages.findIndex(msg=>{
    return msg.key === key;
  });
  let messagesState = this.state.messages;
  let cutMessagesState = messagesState.splice(clickedElement, 1);
  console.log({messagesState}, {cutMessagesState});
  this.setState({
    messages: messagesState
  })
}
changeMsg = (event, key) => {
  // find selected message by key
  let selectedMessage = this.state.messages.findIndex(msg=>{
    return msg.key === key;
  });
  // copy messages
  let messagesCopy = this.state.messages;
  // get new input value
  let newMsg = event.target.value;
  // replace original message with new one in copied state
  messagesCopy[selectedMessage].message = newMsg;
  // set main state to copied one
  this.setState({
    messages: [
      ...messagesCopy
    ]
  });
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
    let messages = {...this.state.messages};
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
              messages={this.state.messages}
              handleNewMessage={(event)=>this.handleNewMessage(event)}
              remainingLength={this.state.remainingLength}
              handleSingleMessage={(event=>this.handleSingleMessage(event))}
              currentMessage={this.state.currentMessage}
              removeMsg={this.removeMsg}
              changeMsg={this.changeMsg}
              />
              }/>
              <Route
              path="/messages" 
              render={()=>
                <Messages 
                messages={this.state.messages}
                removeMsg={this.removeMsg}
                changeMsg={this.changeMsg}
                />}
              />
              >
          </Switch>
        </Router>
    );
  }
}
export default App;
