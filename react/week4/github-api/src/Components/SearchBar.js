import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core'
export default class SearchBar extends Component {
	state = {
		searchTerm : ''
	}
	handleChange = e => {
		this.setState({ searchTerm: e.target.value })
	}
	handleSubmint = e => {
		e.preventDefault()
		const { searchTerm } = this.state
		const { onFormSubmit } = this.props

		onFormSubmit(searchTerm)
		this.setState({ searchTerm: '' })
	}
	render () {
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" noWrap>
						Github Users
					</Typography>
					<form onSubmit={this.handleSubmint}>
						<InputBase
							placeholder="Search..."
							style={{ marginLeft: '50px ' }}
							onChange={this.handleChange}
							value={this.state.searchTerm}
						/>
					</form>
				</Toolbar>
			</AppBar>
		)
	}
}
