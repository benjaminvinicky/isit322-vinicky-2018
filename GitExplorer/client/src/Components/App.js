import React, {Component} from 'react';
import '../css/index.css';
import ApiFoo from './ApiFoo';
import Micros from './Micro1';
import appInit from '../app-init';
import UndeadHeader from './UndeadHeader';
import GitUser from './GitUser';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className = 'App'>
                    <UndeadHeader />
                    <Route exact path='/api/' render={(props) => <GitUser {...props} appInit={appInit}/>} />
                    <Route exact path='/api/foo' render={(props) => <ApiFoo {...props} appInit={appInit}/>} />
                    <Route exact path='/you-rang' render={(props) => <Micros {...props} appInit={appInit}/>} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;