import React, { Component } from 'react';
import './App.css';
import Avatar from './image/Avatar.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <h2></h2>
        <div className="imgcontainer">
          <img src={Avatar} className="avatar" />
        </div>
        <div className="container">
          <label><b>Username</b></label> &nbsp;
          <input type="text" placeholder="Enter Username" name="uname" required />
          <h4><label><b>Password</b></label> &nbsp;
            <input type="password" placeholder="Enter Password" name="psw" required /></h4>
          <button type="submit"style={{ backgroundColor: 'white' }}><strong>Login</strong></button> &nbsp;
          <input type="checkbox"  defaultChecked /> Remember me
           </div>
        <div className="container" style={{ backgroundColor: 'fff' }}>
          <button type="button" style={{ backgroundColor: 'white' }} className="cancelbtn"><strong>Cancel</strong></button> &nbsp;
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </div>

    );
  }
}

export default App;
