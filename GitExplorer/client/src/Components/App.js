import React, { Component } from 'react';
import '../css/index.css';
import ApiFoo from './ApiFoo';
import Micros from './Micro1';
import appInit from '../app-init';
import UndeadHeader from './UndeadHeader';
import GitUser from './GitUser';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <BrowserRouter>
                    <div className="App">
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
                            path="/you-rang"
                            render={props => (
                                <Micros {...props} appInit={appInit} />
                            )}
                        />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
