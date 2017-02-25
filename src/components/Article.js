import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Article extends Component {
	render() {
		let title = this.props.title;
		let content = this.props.content;

		let wrapperClass = '';
		let renderedContent = '';
		let header;

		if (this.props.isList) {
			wrapperClass = 'post';
			renderedContent = this.props.excerpt;

			header = (
				<header>
					<h2 className="post__title">
						<Link to={{
							pathname: this.props.link,
							state: {
								blogInfo: {
									title,
									content,
									'isSingle': false
								}
							}
						}}>
							{ title }
						</Link>
					</h2>
				</header>
			);
		} else { // Single Post
			const blogInfo = this.props.location.state.blogInfo;

			wrapperClass = 'post post--single';
			renderedContent = blogInfo.content;

			header = (
				<header>
					<Link to="/">Back</Link>

					<h2 className="post__title">
						{ blogInfo.title }
					</h2>
				</header>
			);
		}

		return (
			<article className={ wrapperClass }>
				{ header }

				<div dangerouslySetInnerHTML={ { __html: renderedContent } }></div>
			</article>
		);
	}
};

export default Article;
