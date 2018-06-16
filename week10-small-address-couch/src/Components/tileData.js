import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

export const gitItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/">
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/>
        </ListItem>
        <ListItem
            button
            component={Link}
            to="/address-list">
            <ListItemIcon>
                <StarIcon/>
            </ListItemIcon>
            <ListItemText primary="Address"/>
        </ListItem>
        <ListItem
            button
            component={Link}
            to="/init-db">
            <ListItemIcon>
                <SendIcon/>
            </ListItemIcon>
            <ListItemText primary="Initialize Database"/>
        </ListItem>
    </div>
);

/*
/!*export const demoItems = (
    <div>
        <ListItem
            button
            component={Link}
            to="/api/foo">
            <ListItemIcon>
                <DraftsIcon/>
            </ListItemIcon>
            <ListItemText primary="API Foo"/>
        </ListItem>

    </div>*!/
);*/
