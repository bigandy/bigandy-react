import React, { Component } from 'react';

class SinglePage extends Component {
	constructor(props) {
		super(props);

		this.blogInfo = this.props.location.state.blogInfo;
	}
	render() {
		console.log(this.blogInfo.title);

		return (
			<section className="single-page">
				<h1>Hello World</h1>
			</section>
		);
	};
};

export default SinglePage;
