import React, { Component } from 'react';
import '../css/index.css';
import ApiFoo from './ApiFoo';
import Micros from './Micro1';
import appInit from '../app-init';
import UndeadHeader from './UndeadHeader';
import GitUser from './GitUser';
import { BrowserRouter, Route } from 'react-router-dom';
import GistManager from './GistManager';
import InitializeDatabase from './InitializeDatabase';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import dataManager from '../tools/PouchDbManager';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';

const themeDark = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const styles = theme => ({
    container: {
        flexGrow: 1
    }
});

class App extends Component {

    componentDidMount() {
        this.db = dataManager.init();
    }

    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <div className={classes.container}>
                        <UndeadHeader />
                        <Route
                            exact
                            path="/api/"
                            render={props => (
                                <GitUser {...props} appInit={appInit} />
                            )}
                        />
                        <Route
                            exact
                            path="/api/foo"
                            render={props => (
                                <ApiFoo {...props} appInit={appInit} />
                            )}
                        />
                        <Route
                            exact
                            path="/gists"
                            render={props => (
                                <GistManager {...props} dataManager={dataManager} appInit={appInit} />
                            )}
                        />
                        <Route
                            exact
                            path="/you-rang"
                            render={props => (
                                <Micros {...props} appInit={appInit} />
                            )}
                        />
                        <Route
                            exact
                            path="/gistDB"
                            render={props => (
                                <InitializeDatabase {...props} appInit={appInit} dataManager={dataManager}/>
                            )}
                        />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
