import React, { Component } from 'react';

class Posts extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: this.props.posts }
	}

	render() {
		let posts = this.state.posts.length > 0 && this.state.posts.map(post => post);

		return (
			<div>
				<h2>Latest Posts</h2>

				<section className="posts">
					{ posts }
				</section>
			</div>
		);
	}
};

export default Posts;
