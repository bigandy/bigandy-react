import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import showPages from '../helpers/showPages';
import pagesStore from '../helpers/pagesStore';
import fetchFromAPI from '../helpers/fetchFromAPI';

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
				pagesStore.outbox('readwrite')
					.then(db => db.getAll())
					.then(allObjs => {
						return new Promise((resolve, reject) => {
							if (allObjs.length >= 1) {
								console.log('already have pages in indexedDB')

								resolve(showPages(allObjs));
							} else {
								console.log('do not have posts');

								fetchFromAPI('pages', 10).then((pages) => {
									resolve(showPages(pages, true));
								});
							}
						})
					}).then(pages => {
						console.log('Here are the pages', pages);

						this.setState({
							pages
						});
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
