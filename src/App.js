import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import hello from './hello'

function App() {
  return (
    <div className="App" id='Div'>

      <h2>Login Page</h2><br></br>
      <form id="login" method="get" action="login.php">
        <label><b>User Name
        </b>
        </label>
        <input type="text" name="Uname" id="Uname" placeholder="Username"></input>
        <br></br>
        <label><b>Password
        </b>
        </label>
        <input type="Password" name="Pass" id="Pass" placeholder="Password"></input>
        <br></br>
        <input type="button" name="log" id="log" value="Log In Here"></input>
        <br></br>
        <input type="checkbox" id="check"></input>
        <span>Remember me</span>
        <br></br>
        Forgot <a href="#">Password</a>
      </form>


    </div>
  );
}

export default App;
