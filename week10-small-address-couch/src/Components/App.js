import React, { Component } from 'react';
import appInit from '../app-init';
import '../css/App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UndeadHeader from './UndeadHeader';
import Home from './Home';
import Address from './Address';
import InitializeDatabase from './InitializeDatabase';
import { BrowserRouter, Route } from 'react-router-dom';
import dataManager from '../tools/PouchDbManager';
//10.11.3.224
//127.0.0.1

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
            <div className={classes.container}>
                <BrowserRouter>
                    <div className="App">
                        <UndeadHeader appInit={appInit}/>
                        <Route id="home" exact path="/" component={Home} />
                        <Route
                            id="address"
                            path="/address"
                            render={props => (
                                <Address {...props} dataManager={dataManager} />
                            )}
                        />
                        <Route
                            id="initDb"
                            path="/init-db"
                            render={props => (
                                <InitializeDatabase
                                    {...props}
                                    dataManager={dataManager}
                                />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

//export default App;

