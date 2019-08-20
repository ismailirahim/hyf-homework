import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

class App extends Component {
	state = {
		todo    : [],
		newTodo : {}
	}

	componentDidMount () {
		fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
			.then(res => res.json())
			.then(data =>
				this.setState({
					todo : data.map(item => {
						return {
							id          : item.id,
							description : item.description,
							deadline    : item.deadline,
							done        : false,
							isEditing   : false
						}
					})
				})
			)

		// var intervalId = setInterval(() => {
		// 	this.setState({
		// 		timer: this.state.timer + 1
		// 	})
		// }, 1000)
		// this.setState({
		// 	intervalId: intervalId
		// })
	}
	componentWillUnmount () {
		clearInterval(this.state.intervalId)
	}
	deleteTodo = id => {
		const filteredItems = this.state.todo.filter(item => item.id !== id)

		this.setState({
			todo : filteredItems
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
				todo : updatedTodo
			}
		})
	}

	handleInput = e => {
		const newTodoId = Math.floor(Math.random() * 10000)

		const newTodo = {
			...this.state.newTodo, //getting the old values  from state !!
			id              : newTodoId,
			[e.target.name]: e.target.value,
			done            : false
		}

		console.log(newTodo)
		this.setState({
			newTodo : newTodo
		})
	}
	onSubmit = e => {
		e.preventDefault()
		const { newTodo } = this.state
		if (newTodo.description !== '') {
			this.setState({
				todo    : [
					...this.state.todo,
					newTodo
				],
				newTodo : { id: '', description: '', deadline: '', done: '' }
			})
		}
	}
	onEditHandler = id => {
		this.setState(prevState => {
			const data = prevState.todo.filter(elem => {
				if (elem.id === id) {
					elem.isEditing = !elem.isEditing
					return elem
				}
			})
			return {
				editedTodo : data
			}
		})
	}
	onEdidInputHandler = e => {
		const { name, value } = e.target
		let editedData = { [name]: value }
		console.log('from handler', this.state.editedTodo)
		console.log('TCL: App -> editedData', editedData)
		this.setState(prevState =>
			prevState.editedTodo.map(elem => {
				let edited = Object.assign(elem, editedData)
				return edited
			})
		)

		// this.setState(prevState =>
		// 	const resultData = prevState.editedData.map(itme =>)
		// 	//  const resultData = prevState.editedTodo.map(item => {
		// 	// 	const editedDatas = Object.assign(item, editedData)
		// 	// 	return editedDatas
		// 	// })
		// 	// return {
		// 	// 	editedData
		// 	// }
		// )
		// const { value, name } = e.target
		// console.log('TCL: App -> value, name', value, name)

		// let editedValue = { [name]: value }
		// console.log('TCL: App -> editedValue', editedValue)
		// this.setState(prevState => {
		// 	const editedData = prevState.todo.map(item => {
		// 		let todo = Object.assign(item, editedValue)
		// 		return todo
		// 	})
		// 	console.log('TCL: App -> editedData', editedData)
		// 	// return {
		// 	// 	todo : [
		// 	// 		...this.state.todo,
		// 	// 		editedData
		// 	// 	]
		// 	// }
		// })
		// console.log(value)
		// if (value.length === 0) {
		// 	alert('Write something')
		// } else {
		// 	this.setState(item => {
		// 		const data = item.editedTodo.map(item => {
		// 			const inputVaule = { [name]: value }

		// 			Object.assign(item, inputVaule)
		// 		})
		// 		return data
		// 	})
		// }
	}

	render () {
		const { todo } = this.state
		console.log('global STATE', this.state)

		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-8 mt-4">
						<h2 className="text-capitalize text-center">TODO APP</h2>
						<AddTodo
							handleInput={this.handleInput}
							inputTextValue={this.state.todo.description}
							inputDateValue={this.state.todo.deadline}
							onSubmit={this.onSubmit}
						/>
						<TodoList
							todoList={todo}
							deleteTodo={this.deleteTodo}
							onChangeHandler={this.onChangeHandler}
							onEditHandler={this.onEditHandler}
							onEdidInputHandler={this.onEdidInputHandler}
						/>
					</div>
				</div>
			</div>
		)
	}
}
export default App
