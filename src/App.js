import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {playAction, nextAction, stopAction} from './actions'
import './App.css';


const App = () => {
  return (
    <div className="wrapper">
      <form id="registrar" >
        <input type="text"  name="name" placeholder="Name" /><hr />
        <input type="text" text="text" placeholder="Write your comment" /><hr />
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
      <div className="main">
        <h2>0Comments</h2>
      </div>
    </div>
  );
}

export default App;
