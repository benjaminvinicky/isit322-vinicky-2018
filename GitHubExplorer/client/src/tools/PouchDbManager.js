import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';

class DataManager {
    constructor() {
        console.log('DataManager Constructor');
        PouchDB.plugin(PouchdbFind);
        this.gistList = null;
        this.gistIndex = 0;
        this.DATABASE_NAME = 'gist-list-vinicky';
    }

    init = () => {
        console.log('DataManager Init');
        this.db = new PouchDB(this.DATABASE_NAME);
        this.remoteCouch = 'http://10.0.0.74:5984/' + this.DATABASE_NAME;
        return this.db;
    };

    deleteDatabase = () => {
        this.db
            .destroy()
            .then(response => {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = id => {
        const that = this;
        return that.db.get(id).then(function(doc) {
            return that.db.remove(doc);
        });
    };

    save = name => {
        const that = this;

        return that.db.get(name._id).then(function(doc) {
            name._rev = doc._rev;
            return that.db.put(name);
        });
    };

    createIndex = () => {
        this.db
            .createIndex({
                index: {fields: ['ownerLogin']}
            })
            .then(function(result) {
                console.log(result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    watchChanges = showGist => {
        this.db
            .changes({
                since: 'now',
                live: true
            })
            .on('change', showGist);
    };

    getGuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function(c) {
                var r = (Math.random() * 16) | 0,
                    v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
    };

    addGist = data => {
        const gist = {
            _id: this.getGuid(),
            htmlUrl: data.htmlUrl,
            id: data.id,
            gitPullUrl: data.gitPullUrl,
            description: data.description,
            ownerLogin: data.ownerLogin,
            avatarUrl: data.avatarUrl,
            files: data.files
        };
        this.db.put(gist, function callback(err, result) {
            if (!err) {
                console.log('Successfully put record');
                console.log(result);
            } else {
                console.log(err);
            }
        });
    };

    getRecordCount = () => {
        return this.db
            .allDocs({
                include_docs: false
            })
            .then(response => {
                console.log('CURRENT COUNT:', response.rows.length);
                if (response.rows.length >= 100) {
                    throw new Error('The data is already in the database');
                }
            });
    };

    convertGist = gistList => {
        let count = 0;
        this.getRecordCount().then(() => {
            for (let gist of gistList) {
                console.log(count++);
                this.addGist(gist);
            }
        });
    };

    syncError = (a, b) => {
        console.log('Sync Error');
        console.log(a);
        console.log(b);
    };

    sync = () => {
        console.log('syncing');
        const opts = {live: true};

        this.db.replicate
            .to(this.remoteCouch, opts)
            .on('change', function(info) {
                console.log('Change', info);
            })
            .on('paused', function(err) {
                console.log('Paused', err);
            })
            .on('active', function() {
                console.log('Active');
            })
            .on('denied', function(err) {
                console.log('denied', err);
            })
            .on('complete', function(info) {
                console.log('Complete', info);
            })
            .on('error', function(err) {
                console.log('Error', err);
            });

        this.db.replicate
            .from(this.remoteCouch, opts)
            .on('change', function(info) {
                console.log('Change', info);
            })
            .on('paused', function(err) {
                console.log('Paused', err);
            })
            .on('active', function() {
                console.log('Active');
            })
            .on('denied', function(err) {
                console.log('denied', err);
            })
            .on('complete', function(info) {
                console.log('Complete', info);
            })
            .on('error', function(err) {
                console.log('Error', err);
            });
    };

    syncAlt = () => {
        this.db
            .sync(this.remoteCouch, {
                live: true,
                retry: true
            })
            .on('change', function(info) {
                console.log('Change', info);
            })
            .on('paused', function(err) {
                console.log('Paused', err);
            })
            .on('active', function() {
                console.log('Active');
            })
            .on('denied', function(err) {
                console.log('denied', err);
            })
            .on('complete', function(info) {
                console.log('Complete', info);
            })
            .on('error', function(err) {
                console.log('Error', err);
            });
    };
}

const instance = new DataManager();

export default instance;
