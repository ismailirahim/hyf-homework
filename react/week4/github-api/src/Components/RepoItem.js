import React from 'react'

const RepoItem = ({ repoName, html_url }) => {
	console.log(repoName, html_url)
	return (
		<li
			onClick={() => {
				console.log(window.open(html_url))
			}}
		>
			{repoName}
		</li>
	)
}

export default RepoItem
