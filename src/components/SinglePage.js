import React, { Component } from 'react';

class SinglePage extends Component {
	render() {

		let content = '';
		if (typeof this.props.location.state !== 'undefined') {
			content = this.props.location.state.blogInfo.content;
		} else {
			console.log(this.props.location);
			content = '<div><h1>404 Page not found</h1></h1></div>';
		}

		return (
			<section className="single-page">
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
			</section>
		);
	};
};

export default SinglePage;
