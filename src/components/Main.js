require('normalize.css/normalize.css');
require('styles/App.css');
import {
	AppTodoForm,
	TodoItem,
	TodoList
} from './AppTodoForm.js';



import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
	render() {
		console.log(this.props);
		console.log(this.props.todoApp.todo);
		return (
			<div>
				<h1>Todo</h1> 
				<AppTodoForm actions={this.props.actions} />
				<TodoList todo={this.props.todoApp.todo} actions={this.props.actions} />
			</div>
		);
	}
}

AppComponent.defaultProps = {};

export default AppComponent;