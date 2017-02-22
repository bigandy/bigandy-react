import React, { Component } from 'react';

class Pages extends Component {
	constructor(props) {
		super(props);
		this.state = { pages: [] }
	}

	componentDidMount() {
		fetch('https://big-andy.co.uk/wp-json/wp/v2/pages')
			.then(function(response) {
				// Convert to JSON
				return response.json();
			}).then((pages) => {
				const pagesOutput = pages.map(item => {
					if (item.slug === 'style-guide') {
						return null;
					}

					return (
						// <Link to={ `pages/${item.id}`}>
						// 	{item.title.rendered}
						// </Link>
						<a href={ `pages/${item.id}` } key={item.id}>
							{item.title.rendered}
						</a>
					);
				});

				this.setState({
					pages: pagesOutput,
				});
			});
	}

	render() {
		let pages = this.state.pages.length > 0 && this.state.pages.map(page => page);

		return (
			<header>
				<div className="container">
					<h1 className="header__title">
						<a href="/">Andrew Hudson</a>
					</h1>
					<nav className="header__nav">
						{ pages }
					</nav>
				</div>
			</header>
		);
	}
};

export default Pages;
