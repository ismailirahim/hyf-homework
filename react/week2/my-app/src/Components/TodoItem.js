import React from 'react'

class TodoItem extends React.Component {
	render () {
		const { todo, deleteTodo, id, checked, onChangeHandler } = this.props
		// console.log('PROPS FROM TODOITEM', onChangeHandler)
		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				<h6 style={checked ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}>{todo}</h6>
				<div className="todo-icon">
					<span className="mx-2 text-success">
						<input type="checkbox" checked={checked} onChange={() => onChangeHandler(id)} />
					</span>
					<span className="mx-2 text-danger">
						<i className="fas fa-trash" onClick={() => deleteTodo(id)} />
					</span>
				</div>
			</li>
		)
	}
}

export default TodoItem
