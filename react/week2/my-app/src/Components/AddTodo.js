import React, { Component } from 'react'

export default class AddTodo extends Component {
	render () {
		const { addRandomTodo, timer } = this.props

		return (
			<div className="list-group m-5 ">
				<h2 className="h5">You have used {timer} seconds on this web </h2>
				<button onClick={() => addRandomTodo()}>Add Todo</button>
			</div>
		)
	}
}
