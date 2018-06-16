import React, { Component } from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import GistEdit from './GistEdit';

class GistLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            gists: props.gists,
            count: props.count,
            editOpen: false,
            edits: {
                _id: 'unknown',
                description: 'unknown',
                ownerLogin: 'unknown'
            }
        };
    }

    fetchGistList = () => {
        const that = this;
        fetch('/api/get-gists')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);
                that.setState({ gists: json.result, count: json.count, index: 0 });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    nextGist = () => {
        if (this.state.index < this.state.count - 1) {
            this.setState({ index: this.state.index + 1 });
        }
        else {
            this.setState({ index: 0 });
        }
    };

    previousGist = () => {
        if (this.state.index > 0) {
            this.setState({ index: this.state.index - 1 });
        }
        else {
            this.setState({ index: this.state.count - 1 });
        }

    };

    setGist = (offset) => {
        const value = this.state.gistsIndex + offset;
        if (value >= 0 && value <= this.state.gists.length - 1) {
            this.setState({ Index: value, open: this.state.editOpen });
        }
    };

    setEdits = (gists, event) => {
        let data = this.props.gists;
        data[gists] = event.target.value;
        this.setState({ edits: data });
    };

    gistEdit = gist => {
        console.log(gist);

        if (!gist) {
            return this.setState({ editOpen: false });
        }

        this.setState({
            edits: gist,
            editOpen: false
        });
    };

    render() {
        const { classes } = this.props;
        const editDialog = this.state.editOpen ? (
            <GistEdit
                gist={this.props.gists}
                open={this.state.editOpen}
                gistEdit={this.gistEdit}
            />
        ) : (
            <div/>
        );

        return <div className={classes.container}>
            <br/>
            <Button
                id='lastGist'
                onClick={event => this.setGist(-1, event)}
                color='primary'
                variant='raised'
            >
                <Icon>arrow_back</Icon>
            </Button>
            <Button
                id='nextGist'
                onClick={event => this.setGist(1, event)}
                color='primary'
                variant='raised'
            >
                <Icon>arrow_forward</Icon>
            </Button>
            <hr/>
            <img
                className="App-intro, App-avatar"
                src={this.props.gists.avatarUrl}
                alt="avatar"
            />
            <p>Owner: {this.props.gists.ownerLogin}</p>
            <p>ID: {this.props.gists.id}</p>
            <p>Gist: {this.props.gists.files}</p>
            <p>Description: {this.props.gists.description}</p>
            <p>Gist Link: <a href={this.props.gists.htmlUrl} target='blank'>{this.props.gists.htmlUrl}</a></p>
            <hr/>
            <Button
                id="fetchGists"
                onClick={this.props.showGist}
                color='primary'
                variant='raised'
            ><Icon>android</Icon> Get Gists
            </Button>
            <hr/>
            <Button
                color="secondary"
                variant="raised"
                onClick={() => this.setState({ editOpen: true })}
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
            {editDialog}
            <hr/>
        </div>;
    }
}

GistLister.propTypes = {
    classes: PropTypes.object.isRequired,
    gists: PropTypes.object.isRequired,
    save: PropTypes.func.isRequired,
    showGist: PropTypes.func.isRequired,
    setGist: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    appInit: PropTypes.object.isRequired,
    index: PropTypes.number,
    count: PropTypes.number
};

export default GistLister;
