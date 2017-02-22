import React, { Component } from 'react';

class SingleArticle extends Component{
	constructor(props) {
		super(props);

		this.blogInfo = this.props.location.state.blogInfo;
	}
	render() {
		console.log(this.blogInfo.title);

		return (
			<section className="single-post">
				<h2 className="post__title">
					{this.blogInfo.title}
				</h2>
				<div dangerouslySetInnerHTML={ { __html: this.blogInfo.content } }></div>
			</section>
		);
	};
};

export default SingleArticle;
