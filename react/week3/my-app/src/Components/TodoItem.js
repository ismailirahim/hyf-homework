import React from 'react'

class TodoItem extends React.Component {
	render () {
		const {
			todo,
			deleteTodo,
			id,
			checked,
			onChangeHandler,
			deadline,
			onEditHandler,
			isEditing,
			onEdidInputHandler
		} = this.props

		return (
			<li className="list-group-item text-capitalize d-flex justify-content-between my-2">
				{isEditing ? (
					<div>
						<input
							type="text"
							defaultValue={todo}
							name="description"
							onChange={e => onEdidInputHandler(e, id)}
						/>
						<input
							type="date"
							defaultValue={deadline}
							name="deadline"
							onChange={e => onEdidInputHandler(e, id)}
						/>
					</div>
				) : (
					<h6 style={checked ? { color: '#b8b8b8', textDecorationLine: 'line-through' } : null}>
						{todo} {deadline}
					</h6>
				)}

				<div className="todo-icon">
					<span className="mx-2">
						<input type="checkbox" checked={checked} onChange={() => onChangeHandler(id)} />
					</span>
					<span className="mx-2 text-success">
						<i className="fas fa-pen" onClick={e => onEditHandler(id)} />
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
