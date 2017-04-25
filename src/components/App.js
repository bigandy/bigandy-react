import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import Article from './Article';
import SinglePage from './SinglePage';
import Notes from './Notes';

import showPosts from './helpers/showPosts';
import showPages from './helpers/showPages';
import store from './helpers/store';
import fetchFromAPI from './helpers/fetchFromAPI';

class App extends Component {
	constructor(props) {
		super(props);
		this.postsNumber = 10;
		this.state = {
			posts: [],
			pages: [],
		};
	}

	componentDidMount() {
		store.outbox('posts', 'readwrite')
			.then(db => db.getAll())
			.then(allObjs => {
				return new Promise((resolve, reject) => {
					if (allObjs.length >= 1) {
						// console.log('already have posts in indexedDB')

						resolve(showPosts(allObjs));
					} else {
						// console.log('do not have posts');

						fetchFromAPI('posts', this.postsNumber).then((posts) => {
							resolve(showPosts(posts, true));
						});
					}
				})
			}).then(posts => {
				this.setState({
					posts
				});
			});
		store.outbox('pages', 'readwrite')
			.then(db => db.getAll())
			.then(allObjs => {
				return new Promise((resolve, reject) => {
					if (allObjs.length >= 1) {
						// console.log('already have pages in indexedDB')

						resolve(showPages(allObjs));
					} else {
						// console.log('do not have posts');

						fetchFromAPI('pages', 10).then((pages) => {
							resolve(showPages(pages, true));
						});
					}
				})
			}).then(pages => {
				// console.log('Here are the pages', pages);

				this.setState({
					pages
				});
			});
	};

	render() {
		return (
			<Router>
				<div>
					{
						(this.state.pages.length > 0) &&
							<Navigation pages={ this.state.pages }/>
					}


					<main>
						<div className="container container--main">
							<section className="main__posts">
								<Route path="/" exact render={ () => {
									if (this.state.posts.length > 0) {
										return (
											<Posts posts={ this.state.posts } />
										);
									} else {
										return null;
									}
								} }
								/>
								<Route path="/posts/:postid" render={ (props) => {
									if (this.state.pages.length > 0) {
										return (
											<Article posts={ this.state.posts } { ...props } />
										);
									} else {
										return null;
									}
								} } />
								<Route path="/pages/:pageid" render={ (props) => {
									if (this.state.pages.length > 0) {
										return (
											<SinglePage pages={ this.state.pages } { ...props } />
										);
									} else {
										return null;
									}
								} } />
							</section>

							<Route path="/" exact render={() => <Notes /> } />
						</div>
					</main>

					<footer>
						<div className="container">
							<p>&copy;2006 - 2017 Andrew JD Hudson</p>
						</div>
					</footer>
				</div>
			</Router>
		);
	}
}

export default App;
