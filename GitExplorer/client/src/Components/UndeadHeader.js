import React, {Component} from 'react';
import logo from '../images/Tree.svg';
import '../css/App.css';
import '../css/UndeadHeader.css';
import 'whatwg-fetch';
import {Link} from 'react-router-dom';

class UndeadHeader extends Component {
    render() {
        return (
            <div className="App">
                <div id="navBarWrapper">
                    <div className="table">
                        <ul>
                            <li>
                                <Link to='/api'>Git User</Link>
                            </li>
                            <li>
                                <Link to='/api/foo'>foo</Link>
                            </li>
                            <li>
                                <Link to='/you-rang'>Micro</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Welcome to RestBasics Revamped</h1>
                </header>
            </div>
        );
    }
}

export default UndeadHeader;