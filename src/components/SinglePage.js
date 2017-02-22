import React, { Component } from 'react';

class SinglePage extends Component {
	render() {
		const content = this.props.location.state.blogInfo.content;

		return (
			<section className="single-page">
				<div dangerouslySetInnerHTML={{ __html: content }}></div>
			</section>
		);
	};
};

export default SinglePage;
