import React, { Component } from 'react';
import ListItem from './ListItem'
class MyList extends Component {
  state = {
    toDoItemArray: this.props.theList,
    newItem: ''
  }
  clearList = () => {
    this.setState({
      toDoItemArray: []
    })
  }
  handleChange = (event) => {
    this.setState({
      newItem: event.target.value
    })
  }
  clearItem = (toDo) => {
    this.setState({ toDoItemArray: this.state.toDoItemArray.filter(item => item !== toDo) })
  }
  addItem = (event) => {
    event.preventDefault()
    this.setState({
      toDoItemArray: [...this.state.toDoItemArray, this.state.newItem],
      newItem: ''
    })
  }
  render() {
    const todoItems = this.state.toDoItemArray.map((item, index) => <ListItem todoItem={item} key={index} clearItem={this.clearItem} />)
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input
            type="text"
            placeholder="add item"
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button onClick={this.addItem}>Add List</button>
        </form>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    )
  }
}

export default MyList;
