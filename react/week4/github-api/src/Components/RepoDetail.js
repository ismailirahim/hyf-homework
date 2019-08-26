import React, { Component } from 'react'

export default class RepoDetail extends Component {
	state = {}
	render () {
		const { data } = this.props
		console.log(data === undefined)
		// if (data.length === 0) {
		// 	return <h1>loading...</h1>
		// }
		if (data) {
			const arr = data.reduce((a, b) => {
				return {
					avatar : b.owner.avatar_url,
					name   : b.owner.login
				}
			}, {})
			if (data === undefined) {
				return <h1>Not found </h1>
			}

			return (
				<div>
					<img src={arr.avatar} width="200px" alt={arr.avatar} />
					<h1>{arr.name}</h1>
				</div>
			)
		} else {
			return <h1>No data for repo list</h1>
		}
	}
}
