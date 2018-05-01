import React, {Component} from 'react';
import logo from '../images/Tree.svg';
import '../css/App.css';
import 'whatwg-fetch';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to RestBasics Revamped</h2>
                </div>
            </div>
        );
    }
}

export default Header;