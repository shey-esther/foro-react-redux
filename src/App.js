import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import {addComent,deleteComent} from './actions'
import './App.css';

const App = ({date}) => {
  const onClick = e =>{
    e.preventDefault();
    deleteComent(e.target.id);
  };
  
  const Listar = date.map((item,index) => {
    return (
      <li key={index}>
        <div className="col-md-12 col-md-12">
          <div className="col-xs-3">
            <img src="" />
          </div>
          <div className="col-md-9">
            {item.name}
            <hr />
            {item.text}
          </div>
        </div>
        <button onClick={onClick} id={index}>delete</button>
        <button>report</button>
      </li>
      
    );
  });
  const onSubmit = e => {
    e.preventDefault();
    let user = this.input.value;
    let opinion = this.input1.value
    addComent(user,opinion);
  };

  return (
    <div className="contain">
      <form id="registrar" onSubmit={onSubmit}>
        <input type="text" className="form-control"  id="name" placeholder="Name" ref = {e=> (this.input = e) } /><hr />
        <input type="text" className="form-control" id="text" placeholder="Write your comment" ref = {e=> (this.input1 = e) }  /><hr />
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
      <div className="main">
        <h2>{date.length}Comments</h2>
        <ul>{Listar}</ul>
      </div>
    </div>
  );
}
const mapToProps = ({date}) =>({date});

export default connect(mapToProps)(App);
