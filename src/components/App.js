import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import SingleArticle from './SingleArticle';
import SinglePage from './SinglePage';
import Notes from './Notes';

class App extends Component {
	render() {
		return (
			<div>
				<Navigation />

				<main>
					<div className="container container--main">
						<section className="main__posts">
							<Route path="/" exact={ true } component={ Posts } />
							<Route path="/posts/:postid" component={ SingleArticle } />
							<Route path="/pages/:pageid" component={ SinglePage } />
						</section>

						<Route path="/" exact={ true } render={() => <Notes /> } />
					</div>
				</main>
			</div>
		);
	}
}

export default App;
