import React, { Component } from 'react'

export default class AddTodo extends Component {
	render () {
		const { handleInput, inputTextValue, onSubmit, inputDateValue } = this.props

		return (
			<div className="list-group m-5 ">
				<form>
					<input
						type="text"
						value={inputTextValue}
						placeholder="Add Todo..."
						onChange={e => handleInput(e)}
						name="description"
					/>
					<br />
					<br />
					<input type="date" onChange={e => handleInput(e)} name="deadline" value={inputDateValue} />

					{/* <h2 className="h5">You have used {timer} seconds on this web </h2> */}

					<button onClick={e => onSubmit(e)}>Add Todo</button>
				</form>
			</div>
		)
	}
}
