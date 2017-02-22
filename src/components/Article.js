import React, { Component } from 'react';

class Article extends Component {
	render() {
		const title = this.props.title.rendered;
		// const content = this.props.content.rendered;

		return (
			<article className="post">
				<h2 className="post__title">
					{/* <Link
						to={{
						  pathname: `posts/${this.props.id}`,
						  state: { blogInfo: {title, content} }
						}}
						dangerouslySetInnerHTML={ { __html: title } }></Link> */}
					<a href={ `posts/${this.props.id}` }>
						{ title }
					</a>
				</h2>
				<div dangerouslySetInnerHTML={ { __html: this.props.excerpt.rendered } }></div>
			</article>
		);
	}
};

export default Article;
