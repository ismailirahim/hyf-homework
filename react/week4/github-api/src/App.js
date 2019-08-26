import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import SearchBar from './Components/SearchBar'
import RepoList from './Components/RepoList'

import RepoDetail from './Components/RepoDetail'

export default class App extends Component {
	state = {
		repoList : []
	}

	handelSubmit = searchTerm => {
		fetch(`https://api.github.com/users/${searchTerm}/repos`)
			.then(res => {
				if (res.ok) {
					return res.json()
				}
			})
			.then(data =>
				this.setState({
					repoList : data
				})
			)
			.catch(err => console.log(err))
	}
	componentDidMount () {
		this.setState(prevState => {
			console.log(prevState.repoList)
		})
	}

	render () {
		const { repoList } = this.state
		console.log('TCL: App -> render -> current state after', repoList)

		return (
			<div>
				<Grid container spacing={10} justify="center">
					<Grid container justify="center" item xs={12}>
						<SearchBar onFormSubmit={this.handelSubmit} />
					</Grid>
					<Grid item xs={5}>
						<RepoDetail data={repoList} />
					</Grid>
					<Grid item xs={6}>
						<RepoList data={repoList} />
					</Grid>
					{/* <Grid item xs={12}>
						<Paper>xs=3</Paper>
					</Grid> */}
				</Grid>
			</div>
		)
	}
}
