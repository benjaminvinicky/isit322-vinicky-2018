import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GistLister from './GistLister';
import appInit from '../app-init';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    }),
});


class GistManager extends Component {
    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            gistsIndex: 0,
            gists: appInit.gists
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    watcher = event => {
        console.log('Watch Change', event);
        this.showGist();
    };

    setGist = (offset) => {
        const value = this.state.gistsIndex + offset;
        if (value >= 0 && value <= this.state.gists.length - 1) {
            this.setState({ gistsIndex: value, open: this.state.editOpen });
        }
    };

    save = (gist) => {
        console.log(gist);
        this.props.dataManager
            .save(gist)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (gist) => {
        this.props.dataManager
            .delete(gist._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };



    addGist = (data) => {
        const indexValue = this.state.gistIndex + 1;
        this.setState({gistIndex: indexValue});
        const gist = {
            _id: new Date().toISOString(),
            ownerLogin: data.ownerLogin,
            completed: false
        };
        this.db.put(gist, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted: '+ result);
            }
        });
    };

    showGist = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { ownerLogin: { $gt: null } },
                sort: ['ownerLogin']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const gist = response.docs.map(gist => {
                    return {
                        _id: gist._id,
                        _rev: gist._rev,
                        description: gist.description,
                        ownerLogin: gist.ownerLogin,
                        htmlUrl: gist.htmlUrl,
                        id: gist.id,
                        gitPullUrl: gist.gitPullUrl,
                        avatarUrl: gist.avatarUrl,
                        files: gist.files
                    };
                });
                if (!this.canceled) {
                    that.setState({ gists: gist });
                }
            });
    };

    handleDesription = event => {
        this.setState({description: event.target.value});
    };

    handleOwner = event => {
        this.setState({ownerLogin: event.target.value});
    };

    update = () => {
        this.db.get(this.state.ids[0])
            .then((gist) => {
                gist.completed = true;
                this.db.put(gist);
            });
    };

    syncError = () => {
        this.syncDom.setAttribute('data-sync-state', 'error');
    };

    sync = () => {
        this.syncDom.setAttribute('data-sync-state', 'syncing');
        let opts = {live: true};
        this.db.replicate.to(this.remoteCouch, opts, this.syncError);
        this.db.replicate.from(this.remoteCouch, opts, this.syncError);
    };

    render() {
        const {classes} = this.props;
        return <div className={classes.container}>
            <GistLister
                gists={this.state.gists[this.state.gistsIndex]}
                showGist={this.showGist}
                setGist={this.setGist}
                save={this.save}
                delete={this.delete}
                appInit={this.props.appInit}
                classes={classes}
                index={this.state.gistsIndex}
            />
        </div>;
    }
}

GistManager.propTypes = {
    dataManager: PropTypes.object.isRequired,
    appInit: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GistManager);

//export default App;

