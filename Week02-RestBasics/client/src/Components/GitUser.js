import React, {Component} from 'react';
import '../css/App.css';
import 'whatwg-fetch';

class GitUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.appInit.name,
            pic: props.appInit.pic
        };
    }

    queryGitAPIUser = () => {
        const that = this;
        fetch('/api/user')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json.body);
                that.setState({name: json.body.name, pic: json.body.avatar_url});
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <p className="App-intro">Login: {this.state.name}</p>
                <img className="App-intro, App-avatar" src={this.state.pic} alt="avatar"/>
                <br/>
                <button id='getProfile' onClick={this.queryGitAPIUser}>Query Git API</button>
            </div>
        );
    }
}

export default GitUser;