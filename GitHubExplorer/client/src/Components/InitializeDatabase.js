import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import AppInit from '../app-init';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import 'whatwg-fetch';

const styles = theme => ({
    root: {
        textAlign: 'center',
        addingTop: theme.spacing.unit * 500,
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

class InitializeDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gistIndex: 0,
            gistList: AppInit.gists
        };
    }

    sync = () => {
        this.props.dataManager.sync();
    };

    convertGist = () => {
        this.props.dataManager.convertGist(this.state.gistList);
    };

    deleteDatabase = () => {
        this.props.dataManager.deleteDatabase();
    };

    getGistList = () => {
        const that = this;
        console.log('getGistList called.');
        fetch('/api/get-gists')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState({gistList: json.result, gistIndex: 0 });
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };
    /*.then(response => response.json())
            .then(gistListFromServer => {
                if (!this.canceled) {
                    that.setState({ gistList: gistListFromServer.result });
                    that.setState({ gistIndex: 0 });
                    console.log(gistListFromServer.length);
                    //this.setGist(0);
                }
            })
            .catch(ex => {
                console.log(ex);
            });
    };*/

    getDbInfo = () => {
        this.props.dataManager.db.info().then(function(info) {
            console.log(info);
        });
    };

getFive = () => {
    this.props.dataManager.db
        .find({
            selector: {
                _id: {$gte: null}
            },
            limit: 5
        })
        .then(docs => {
            console.log(docs);
        });

};

    showIndex = () => {

        this.props.dataManager.db
            .getIndexes()
            .then(function(result) {
                console.log(result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.rootBar} elevation={4}>
                    <Typography variant="headline" gutterBottom>
                        Database Tools
                    </Typography>

                    <Typography variant="body1" gutterBottom align="left">
                        The tools found here would probably not be part of a
                        production system. They are designed to help us understand
                        how our database works.
                    </Typography>
                    <Typography variant="body1" gutterBottom align="left">If you clear the data in storage then refresh
                        the app before
                        trying to do anything else.</Typography>
                    <Typography variant="headline">Enter Sync Mode</Typography>
                    <Typography variant="body1" gutterBottom align="left">Use the sync button when you are connected to
                        the Internet.
                        By default, you are not in sync mode. Do not press this
                        button if you are offline.</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.sync}
                    >
                        Sync
                    </Button>

                    <Typography variant="headline">Load Data</Typography>
                    <Typography variant="body1" gutterBottom align="left">Use these buttons, pressing them in the order
                        shown, to load our
                        gist-list and convert it to PouchDb Format. You should need
                        to do this only once, or only after you clear Storage using the
                        Developer Tools.</Typography>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.getGistList}
                        >
                            Get Gist List
                        </Button>

                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.convertGist}
                        >
                            Convert Gist
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.props.dataManager.createIndex}
                        >
                            Create Index on Owner Login
                        </Button>
                    </div>

                    <Typography variant="headline">Get Information</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.getDbInfo}
                    >
                        Get Database Information
                    </Button>

                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.showIndex}
                    >
                        Show Index
                    </Button>

                    <Typography variant="headline">Coming Soon</Typography>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.deleteDatabase}
                    >
                        Delete Database
                    </Button>
                </Paper>
            </div>
        );
    }
}

InitializeDatabase.propTypes = {
    classes: PropTypes.object.isRequired,
    dataManager: PropTypes.shape({
        sync: PropTypes.func,
        convertGist: PropTypes.func,
        createIndex: PropTypes.func,
        deleteDatabase: PropTypes.func,
        db: PropTypes.shape({
            info: PropTypes.func,
            find: PropTypes.func,
            getIndexes: PropTypes.func
        })
    }),

};

export default withStyles(styles)(InitializeDatabase);