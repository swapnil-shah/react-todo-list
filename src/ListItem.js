import React from 'react';
import './App.css';


const ListItem = props => (
  <>


    <li>{props.todoItem}<button onClick={props.clearItem.bind(this, props.todoItem)}> X</button></li>

  </>
)

export default ListItem