import React, { Component } from 'react';
import '../css/App.css';
import '../css/UndeadHeader.css';
import 'whatwg-fetch';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { gitItems } from './tileData';


const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
};


class UndeadHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        const { classes } = this.props;
        const sideList = (
            <div className={classes.list}>
                <List>{gitItems}</List>
                <Divider />
            </div>
        );
        return (
            <div>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Small Address Couch
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} onClose={this.handleToggle}>
                    <div
                        role="button"
                        onClick={this.handleToggle}
                        onKeyDown={this.handleToggle}
                    >
                        {sideList}
                    </div>
                </Drawer>

            </div>
        );
    }
}

UndeadHeader.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UndeadHeader);

/*render() {
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



export default UndeadHeader;*/
