import React from 'react';
import {
  addTodo,
  completeTodo,
  deleteTodo,
  clearTodo
} from '../actions/const.js';


export class AppTodoForm extends React.Component {
  state = {
    message: ''
  };

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    // console.log(store);
    this.props.actions.addTodo(this.state.message);
    this.setState({
      message: ''
    });
  }

  onMessageChanged(e) {
    var message = e.target.value;
    console.log(message);
    this.setState({
      message: message
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <input type="text" placeholder="Todo..." onChange={this.onMessageChanged.bind(this)} value={this.state.message} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export class TodoItem extends React.Component {
  onDeleteClick() {
    console.log(this.props.actions)
    this.props.actions.deleteTodo(this.props.index);
  }

  onCompletedClick() {
    this.props.actions.completeTodo(this.props.index);
  }

  render() {
    return (
      <li>
        <a href="#" onClick={this.onCompletedClick.bind(this)} style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}>{this.props.message.trim()}</a>&nbsp;
        <a href="#" onClick={this.onDeleteClick.bind(this)} style={{textDecoration: 'none'}}>[x]</a>
      </li>
    );
  }
}

export class TodoList extends React.Component {
  state = {
    items: []
  };

  componentWillMount() {
    console.log(this.props.todo);
    var items = this.props.todo.items;
    console.log(items);
    this.setState({
      items: items
    });
  }
  componentWillReceiveProps(nextProps) {
    var items = nextProps.todo.items;
    console.log(items);
    this.setState({
      items: items
    });
  }

  render() {
    var items = [];

    this.state.items.forEach((item, index) => {
      items.push(<TodoItem
        key={index}
        index={index}
        message={item.message}
        completed={item.completed}
        actions={this.props.actions}
      />);
    });

    if (!items.length) {
      return (
        <p>
          <i>Please add something to do.</i>
        </p>
      );
    }

    return (
      <ol>{items}</ol>
    );
  }
}