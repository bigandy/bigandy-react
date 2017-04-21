import idb from 'idb';

const pagesStore = {
	db: null,

	init: function() {
		if (pagesStore.db) {
			return Promise.resolve(pagesStore.db);
		}

		return idb.open('pages-store', 1, (upgradeDB) => {
			upgradeDB.createObjectStore('pages', { autoIncrement : true, keyPath: 'id' });
		}).then((db) => {
			return pagesStore.db = db;
		});
	},

	outbox: function(mode) {
		return pagesStore.init().then((db) => {
			return db.transaction('pages', mode).objectStore('pages');
		});
	}
};

export default pagesStore;
