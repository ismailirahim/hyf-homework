import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	render () {
		const { todoList, deleteTodo, onChangeHandler } = this.props
		// console.log('PROPS FROM LIST', onChangeHandler)
		const displayItems = todoList.map(elem => {
			return (
				<TodoItem
					todo={elem.description}
					key={elem.id}
					deleteTodo={deleteTodo}
					id={elem.id}
					checked={elem.done}
					onChangeHandler={onChangeHandler}
				/>
			)
		})
		if (displayItems.length === 0) {
			return (
				<ul className="list-group my-5">
					<h3 className="text-capitalize text-center">Todo List</h3>
					<h3>No More Items</h3>
				</ul>
			)
		} else {
			return (
				<ul className="list-group my-5">
					<h3 className="text-capitalize text-center">Todo List</h3>
					{displayItems}
				</ul>
			)
		}
	}
}
