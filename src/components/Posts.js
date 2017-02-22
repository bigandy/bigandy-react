import React, { Component } from 'react';

import Article from './Article';

class Posts extends Component{
	constructor(props) {
		super(props);
		this.postsNumber = 10;
		this.state = { posts: [] }
	}

	componentDidMount() {
		fetch(`https://big-andy.co.uk/wp-json/wp/v2/posts?per_page=${this.postsNumber}`)
			.then(function(response) {
				// Convert to JSON
				return response.json();
			}).then((posts) => {
				const postsOutput = posts.map(item => {
					return (
						<Article {...item} key={item.id} />
					);
				});

				this.setState({
					posts: postsOutput,
				});
			});
	}

	render() {
		let posts = this.state.posts.length > 0 && this.state.posts.map(post => post);

		return (
			<section className="posts">
				<h2>Latest Posts</h2>
				{ posts }
			</section>
		);
	}
};

export default Posts;
