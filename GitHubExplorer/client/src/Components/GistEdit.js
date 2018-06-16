import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import GistEditFields from './GistEditFields';
import AppInit from '../app-init';

export default class GistEdit extends React.Component {

    state = {
        open: this.props.open,
        gist: AppInit.gists[0]
    };

    userClosedDialogNormal = () => {
        this.props.gistEdit(this.state.address);
    };

    userCanceledDialog = () => {
        this.props.gistEdit(null);
    };

    gistChangedByUser = (v, e) => {
        this.props.gist[v] = e.target.value;
        this.setState({ gist: this.props.gist });
    };

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.userClosedDialogNormal}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Edit Gist
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Change the description in the gist record.
                        </DialogContentText>
                        <GistEditFields gist={this.state.gist} addressChangedByUser={this.gistChangedByUser}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.userCanceledDialog} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.userClosedDialogNormal} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

GistEdit.propTypes = {
    open: PropTypes.bool,
    gistEdit: PropTypes.func,
    gist: PropTypes.shape({
        description: PropTypes.string,
        ownerLogin: PropTypes.string
    })
};