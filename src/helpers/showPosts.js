import React from 'react';

import Article from '../components/Article';

const showPosts = (posts, deep = false) => {
	return posts.map(item => {
		if (deep === false) {
			item = item.post;
		}

		return (
			<Article
				content={ item.content }
				excerpt={ item.excerpt }
				link={ `/posts/${item.id}` }
				title={ item.title }
				isList={ true }
			/>
		);
	});
};

export default showPosts;
