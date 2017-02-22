import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Article extends Component {
	render() {
		const title = this.props.title.rendered;
		const content = this.props.content.rendered;

		return (
			<article className="post">
				<h2 className="post__title">
					<Link
						to={{
						  pathname: `/posts/${this.props.id}`,
						  state: { blogInfo: {title, content} }
						}}
						dangerouslySetInnerHTML={ { __html: title } }></Link>
				</h2>
				<div dangerouslySetInnerHTML={ { __html: this.props.excerpt.rendered } }></div>
			</article>
		);
	}
};

export default Article;
