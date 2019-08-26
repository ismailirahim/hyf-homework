import React, { Component } from 'react'
import RepoItem from './RepoItem'

export default class RepoList extends Component {
	render () {
		const { data } = this.props
		if (data) {
			const repositoryData = data.map(elem => (
				<RepoItem repoName={elem.name} key={elem.id} html_url={elem.html_url} />
			))
			return (
				<div>
					<h2>Repositorys:</h2>
					{repositoryData}
				</div>
			)
		} else {
			return <h1>No data</h1>
		}
	}
}
