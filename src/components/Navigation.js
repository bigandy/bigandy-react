import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = { pages: [] }
	}

	componentDidMount() {
		fetch('https://big-andy.co.uk/wp-json/wp/v2/pages')
			.then(function(response) {
				console.log('doing a page fetch');
				// Convert to JSON
				return response.json();
			}).then((pages) => {
				const pagesOutput = pages.map(item => {
					if (item.slug === 'style-guide') {
						return null;
					}

					let href = `/pages/${item.slug}`;

					if (item.slug === 'home') {
						href = '/';
					}

					return (
						<Link
							to={{
							  pathname: href,
							  state: {
								  blogInfo: {
									  'content': item.content.rendered,
						  		  }
					  		}
							}}
							key={ item.id }
						>
							{ item.title.rendered }
						</Link>
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
			<header className="header">
				<div className="container">
					<h1 className="header__title">
						<Link to="/">Andrew Hudson</Link>
					</h1>
					<nav className="header__nav">
						{ pages }
					</nav>
				</div>
			</header>
		);
	}
};

export default Navigation;
