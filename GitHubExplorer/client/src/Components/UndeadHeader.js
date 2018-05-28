import React, { Component } from 'react';
import logo from '../images/Tree.svg';
import '../css/App.css';
import '../css/UndeadHeader.css';
import 'whatwg-fetch';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class UndeadHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (
            <div className="App">
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    <MenuItem
                        primaryText="Git Home"
                        containerElement={<Link to="/api" />}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText="View Gists"
                        containerElement={<Link to="/gists" />}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText="Api-Foo"
                        containerElement={<Link to="/api/foo" />}
                        onClick={this.handleToggle}
                    />
                    <MenuItem
                        primaryText="You Rang?"
                        containerElement={<Link to="/you-rang" />}
                        onClick={this.handleToggle}
                    />
                </Drawer>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>GitHub Explorer</h1>
                </header>
            </div>
        );
    }
}



export default UndeadHeader;
