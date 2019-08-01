import React from 'react';
import ReactDOM from 'react-dom';
import todoList from './todoList';

class TodoTitle extends React.Component {
	render() {
		return <h1>Todo List</h1>;
	}
}

class TodoItem extends React.Component {
	render() {
		console.log(this.props);
		const { todo } = this.props;
		console.log(todo);
		return <li>{todo}</li>;
	}
}

class TodoTask extends React.Component {
	render() {
		const todoItem = todoList.map((task) => <TodoItem todo={task.todo} key={task.id} />);
		return (
			<div>
				<TodoTitle />
				<ul>{todoItem}</ul>
			</div>
		);
	}
}

ReactDOM.render(<TodoTask />, document.getElementById('root'));
