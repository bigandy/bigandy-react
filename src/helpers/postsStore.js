import idb from 'idb';

const postsStore = {
	db: null,

	init: function() {
		if (postsStore.db) {
			return Promise.resolve(postsStore.db);
		}

		return idb.open('posts-store', 1, (upgradeDB) => {
			upgradeDB.createObjectStore('posts', { autoIncrement : true, keyPath: 'id' });
		}).then((db) => {
			return postsStore.db = db;
		});
	},

	outbox: function(mode) {
		return postsStore.init().then((db) => {
			return db.transaction('posts', mode).objectStore('posts');
		});
	}
};

export default postsStore;
