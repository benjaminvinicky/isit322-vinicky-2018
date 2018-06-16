import React, {Component} from 'react';
import '../css/App.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GistEdit from './GistEdit';

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

class GistShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            edits: {
                _id: 'unknown',
                description: 'unknown',
                ownerLogin: 'unknown'
            }
        };
    }

    componentDidMount() {
    }

    setEdits = (gists, event) => {
        let data = this.props.gists;
        data[gists] = event.target.value;
        this.setState({edits: data});
    };

    gistEdit = gist => {
        console.log(gist);

        if (!gist) {
            return this.setState({editOpen: false});
        }

        this.setState({
            edits: gist,
            editOpen: false
        });
    };

    render() {
        const {classes} = this.props;
        const editDialog = this.state.editOpen ? (
            <GistEdit
                gist={this.props.gists}
                open={this.state.editOpen}
                gistEdit={this.gistEdit}
            />
        ) : (
            <div/>
        );

        return (
            <div className={classes.container}>
                <Paper className={classes.rootBar}>
                    <p>{this.props.gists.description}</p>
                    <p>{this.props.gists.ownerLogin}</p>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={this.props.showGist}
                    >
                        Show
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setGist(-1, event)}
                    >
                        Back
                    </Button>
                    <Button
                        color="secondary"
                        variant="raised"
                        onClick={event => this.props.setGist(1, event)}
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
                                this.props.delete(this.props.gists, event)
                            }
                        >
                            Delete
                        </Button>
                        <Button
                            color="secondary"
                            variant="raised"
                            onClick={() => this.setState({editOpen: true})}
                        >
                            Edit
                        </Button>
                        {editDialog}
                    </div>
                </Paper>
            </div>
        );
    }
}

GistShow.propTypes = {
    classes: PropTypes.object.isRequired,
    gists: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    showGist: PropTypes.func.isRequired,
    setGist: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

export default withStyles(styles)(GistShow);

//export default App;

