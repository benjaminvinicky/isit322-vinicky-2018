import React, { Component } from 'react';
import '../css/App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddressShow from './AddressShow';

const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
    }
});

class Address extends Component {
    constructor(props) {
        super(props);
        this.canceled = false;
        this.state = {
            editOpen: false,
            namesIndex: 0,
            names: [{
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }]
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.canceled = true;
    }

    watcher = event => {
        console.log('Watch Change', event);
        this.showAddress();
    };

    setAddress = (offset) => {
        const value = this.state.namesIndex + offset;
        if (value >= 0 && value <= this.state.names.length - 1) {
            this.setState({ namesIndex: value, open: this.state.editOpen });
        }
    };

    save = (name) => {
        console.log(name);
        this.props.dataManager
            .save(name)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(err) {
                console.log(err);
            });
    };

    delete = (name) => {
        this.props.dataManager
            .delete(name._id)
            .then(function(result) {
                console.log('BAR', result);
            })
            .catch(function(err) {
                console.log(err);
            });
    };



    addAddress = (data) => {
        const indexValue = this.state.addressIndex + 1;
        this.setState({addressIndex: indexValue});
        const address = {
            _id: new Date().toISOString(),
            firstName: data.firstName,
            lastName: data.lastName,
            completed: false
        };
        this.db.put(address, function callback(err, result) {
            if (!err) {
                console.log('Successfully posted: '+ result);
            }
        });
    };

    showAddress = () => {
        const that = this;
        return that.props.dataManager.db
            .find({
                selector: { lastName: { $gt: null } },
                sort: ['lastName']
            })
            .then(response => {
                console.log('RECORD COUNT:', response.docs.length);
                const names = response.docs.map(address => {
                    return {
                        _id: address._id,
                        _rev: address._rev,
                        firstName: address.firstName,
                        lastName: address.lastName
                    };
                });
                if (!this.canceled) {
                    that.setState({ names: names });
                }
            });
    };

    handleFirst = event => {
        this.setState({firstName: event.target.value});
    };

    handleLast = event => {
        this.setState({lastName: event.target.value});
    };

    update = () => {
        this.db.get(this.state.ids[0])
            .then((address) => {
                address.completed = true;
                this.db.put(address);
            });
    };

    syncError = () => {
        this.syncDom.setAttribute('data-sync-state', 'error');
    };

    sync = () => {
        this.syncDom.setAttribute('data-sync-state', 'syncing');
        let opts = {live: true};
        this.db.replicate.to(this.remoteCouch, opts, this.syncError);
        this.db.replicate.from(this.remoteCouch, opts, this.syncError);
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <AddressShow
                    name={this.state.names[this.state.namesIndex]}
                    showAddress={this.showAddress}
                    setAddress={this.setAddress}
                    save={this.save}
                    delete={this.delete}
                />
            </div>
        );
    }
}

Address.propTypes = {
    classes: PropTypes.object.isRequired,
    dataManager: PropTypes.object.isRequired
};

export default withStyles(styles)(Address);

//export default App;

