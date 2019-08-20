import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	render () {
		const { todoList, deleteTodo, onChangeHandler, onEditHandler, onEdidInputHandler } = this.props

		const displayItems = todoList.map(todo => {
			return (
				<TodoItem
					todo={todo.description}
					key={todo.id}
					deleteTodo={deleteTodo}
					id={todo.id}
					deadline={todo.deadline}
					checked={todo.done}
					onChangeHandler={onChangeHandler}
					onEditHandler={onEditHandler}
					isEditing={todo.isEditing}
					onEdidInputHandler={onEdidInputHandler}
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
