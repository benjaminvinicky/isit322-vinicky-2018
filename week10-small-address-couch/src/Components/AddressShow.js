import React, {Component} from 'react';
import '../css/App.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    container: {
        flexGrow: 1,
        textAlign: 'center'
    },
    rootBar: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3
    }),
});

class AddressShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                firstName: 'unknown',
                lastName: 'unknown'
            }
        };
    }

    componentDidMount() {
    }

    setEdits = (name, event) => {
        let data = this.props.name;
        data[name] = event.target.value;
        this.setState({edits: data});
    };

    addressEdit = address => {
        console.log(address);

        if (!address) {
            return this.setState({editOpen: false});
        }

        this.setState({
            edits: address,
            editOpen: false
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p>{this.props.name.firstName}</p>
                    <p>{this.props.name.lastName}</p>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.props.showAddress}
                    >
                        Show
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setAddress(1, event)}
                    >
                        Forward
                    </Button>
                    <div>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={() => this.setState({editOpen: true})}
                        >
                            Edit
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={this.save}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={event =>
                                this.props.delete(this.props.name, event)
                            }
                        >
                            Delete
                        </Button>
                    </div>
                </Paper>
            </div>
        );
    }
}

AddressShow.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    showAddress: PropTypes.func.isRequired,
    setAddress: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

export default withStyles(styles)(AddressShow);

//export default App;

