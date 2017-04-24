import pagesStore from './pagesStore';
import postsStore from './postsStore';

const fetchFromAPI = (type = 'posts', number = 9) => {
	return new Promise((resolve, reject) => {
		fetch(`https://big-andy.co.uk/wp-json/wp/v2/${type}?per_page=${number}`)
			.then((response) => {
				// console.log('doing a post fetch');
				// Convert to JSON
				return response.json();
			}).then((posts) => {
				const postsOutput = posts.map((post) => {
					const {
						id,
						date_gmt,
						link,
						excerpt: {rendered: excerpt},
						content: {rendered: content},
						title: {rendered: title},
						slug,
					} = post;

					return {
						id,
						date_gmt,
						excerpt,
						content,
						title,
						link,
						slug
					};
				});

				postsOutput.forEach((post) => {
					if (type === 'pages') {
						pagesStore.outbox('readwrite')
							.then(tx => {
								tx.put({
									post
								});
								return tx.complete;
						});
					} else {
						postsStore.outbox('readwrite')
							.then(tx => {
								tx.put({
									post
								});
								return tx.complete;
						});
					}


				});
				return resolve(postsOutput);
			});
	});
};

export default fetchFromAPI;
