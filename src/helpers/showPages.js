import React from 'react';

import { Link } from 'react-router-dom';

const showPages = (pages, deep = false) => {
	return pages.map(item => {
		if (deep === false) {
			item = item.post;
		}

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
						  'content': item.content,
			  		  }
		  		}
				}}
				key={ item.id }
			>
				{ item.title }
			</Link>
		);
	});
};

export default showPages;
