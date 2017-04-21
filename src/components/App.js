import React, { Component } from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import Article from './Article';
import SinglePage from './SinglePage';
import Notes from './Notes';

import showPosts from '../helpers/showPosts';
import postsStore from '../helpers/postsStore';
import fetchFromAPI from '../helpers/fetchFromAPI';

class App extends Component {
	constructor(props) {
		super(props);
		this.postsNumber = 10;
		this.state = { posts: [] }
	}

	componentDidMount() {
		postsStore.outbox('readwrite')
			.then(db => db.getAll())
			.then(allObjs => {
				return new Promise((resolve, reject) => {
					if (allObjs.length >= 1) {
						console.log('already have posts in indexedDB')

						resolve(showPosts(allObjs));
					} else {
						console.log('do not have posts');

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
	};

	render() {
		return (
			<Router>
				<div>
					<Navigation />

					<main>
						<div className="container container--main">
							<section className="main__posts">
								<Route path="/" exact render={ () => {
									if (this.state.posts.length > 0) {
										return (
											<Posts posts={this.state.posts} />
										);
									} else {
										return null;
									}
								} }
								/>
								<Route path="/posts/:postid" component={ Article } />
								<Route path="/pages/:pageid" component={ SinglePage } />
							</section>

							<Route path="/" exact render={() => <Notes /> } />
						</div>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
