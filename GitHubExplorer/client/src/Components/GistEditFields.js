import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

class GistEditFields extends Component {
    render() {
        return (
            <div>
                <TextField
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Description"
                    type="string"
                    value={this.props.gist.description}
                    onChange={e => this.props.gistChangedByUser('description', e)}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="ownerLogin"
                    label="Owner Login"
                    type="string"
                    value={this.props.gist.ownerLogin}
                    onChange={e => this.props.gistChangedByUser('ownerLogin', e)}
                    fullWidth
                />
            </div>
        );
    }
}

GistEditFields.propTypes = {
    gistChangedByUser: PropTypes.func,
    gist: PropTypes.shape({
        description: PropTypes.string,
        ownerLogin: PropTypes.string
    })
};

export default GistEditFields;
