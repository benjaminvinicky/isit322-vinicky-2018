import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {yellow500} from 'material-ui/styles/colors';
import PropTypes from 'prop-types';

class ShowNewGist extends Component {
    static propTypes = {
        appInit: PropTypes.object.isRequired,
        index: PropTypes.number,
        count: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            index: props.appInit.index,
            gists: props.appInit.gists,
            count: props.appInit.count
        };
    }

    fetchGistList = () => {
        const that = this;
        fetch('/api/get-gists')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState({gists: json.result, count: json.count, index: 0 });
            })
            .catch(function (ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    nextGist = () => {
        if (this.state.index < this.state.count - 1) {
            this.setState( {index: this.state.index + 1});
        }
        else {
            this.setState({index: 0});
        }
    };

    previousGist = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1});
        }
        else {
            this.setState({index: this.state.count - 1});
        }

    };


    render() {
        return (
            <div className="App">
                <br/>
                <RaisedButton
                    label="Last Gist"
                    onClick={this.previousGist}
                    icon={
                        <FontIcon className="material-icons" color={yellow500}>
                            navigate_before
                        </FontIcon>
                    }
                    labelPosition="after"
                    primary={true}
                />
                <RaisedButton
                    id="nextGist"
                    label="Next Gist"
                    onClick={this.nextGist}
                    icon={
                        <FontIcon className="material-icons" color={yellow500}>
                            navigate_next
                        </FontIcon>
                    }
                    labelPosition="before"
                    primary={true}
                />
                <hr />
                <img
                    className="App-intro, App-avatar"
                    src={this.state.gists[this.state.index].avatarUrl}
                    alt="avatar"
                />
                <p>Owner: {this.state.gists[this.state.index].ownerLogin}</p>
                <p>ID: {this.state.gists[this.state.index].id}</p>
                <p>Gist: {this.state.gists[this.state.index].files}</p>
                <p>Description: {this.state.gists[this.state.index].description}</p>
                <p>Gist Link: <a href={this.state.gists[this.state.index].htmlUrl} target='blank'>Here</a></p>
                <hr />
                <RaisedButton
                    id="fetchGists"
                    label="Fetch Gists"
                    onClick={this.fetchGistList}
                    icon={
                        <FontIcon className="material-icons" color={yellow500}>
                            android
                        </FontIcon>
                    }
                    labelPosition="after"
                    primary={true}
                />
            </div>
        );
    }
}

export default ShowNewGist;
