import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

import todos from './todoList'

class App extends Component {
	state = {
		todo: todos,
		timer: 0
	}
	componentDidMount () {
		var intervalId = setInterval(() => {
			this.setState({
				timer: this.state.timer + 1
			})
		}, 1000)
		this.setState({
			intervalId: intervalId
		})
	}
	componentWillUnmount () {
		clearInterval(this.state.intervalId)
	}
	deleteTodo = id => {
		const filteredItems = this.state.todo.filter(item => item.id !== id)

		this.setState({
			todo: filteredItems
		})
	}
	onChangeHandler = id => {
		this.setState(prevState => {
			const updatedTodo = prevState.todo.map(todo => {
				if (todo.id === id) {
					todo.done = !todo.done
				}
				return todo
			})
			return {
				todo: updatedTodo
			}
		})
	}
	addRandomTodo = () => {
		let newTodoId = Math.floor(Math.random() * 10000)
		const newTodo = {
			id: newTodoId,
			description: 'Random Todo',
			done: false
		}
		const updatedTodos = [ ...this.state.todo, newTodo ]
		this.setState({
			todo: updatedTodos
		})
	}

	render () {
		const { todo } = this.state
		console.log(todo)

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h2 className="text-capitalize text-center">TODO APP</h2>
						<AddTodo addRandomTodo={this.addRandomTodo} timer={this.state.timer} />
						<TodoList todoList={todo} deleteTodo={this.deleteTodo} onChangeHandler={this.onChangeHandler} />
					</div>
				</div>
			</div>
		)
	}
}
export default App
