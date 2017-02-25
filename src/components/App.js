import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Posts from './Posts';
import Article from './Article';
import SinglePage from './SinglePage';
import Notes from './Notes';

class App extends Component {
	constructor(props) {
		super(props);
		this.postsNumber = 10;
		this.state = { posts: [] }
	}

	componentDidMount() {
		fetch(`https://big-andy.co.uk/wp-json/wp/v2/posts?per_page=${this.postsNumber}`)
			.then((response) => {
				console.log('doing a post fetch');
				// Convert to JSON
				return response.json();
			}).then((posts) => {
				const postsOutput = posts.map(item => {
					return (
						<Article
							content={ item.content.rendered }
							excerpt={ item.excerpt.rendered }
							link={ `/posts/${item.id}` }
							title={ item.title.rendered }
							isList={ true }
							key={ item.id }
						/>
					);
				});

				this.setState({
					posts: postsOutput,
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
