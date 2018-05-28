let undeadLogger =require('debug');
let express = require('express');
let router = express.Router();
let GitHub = require('github-api');

const token = require('./tokens');

let getGitHub = function() {
    let gh;
    if (true) {
        gh = new GitHub({
            token: token
        });
    } else {
        gh = new GitHub({
            username: 'benjaminvinicky',
            password: ''
        });
    }
    return gh;
};

router.get('/', function(req, res, next) { 'use strict';
    res.send('gists called');
});

router.get('/get-basic-list', function(request, response) {
    undeadLogger.log('G');
    let gh = getGitHub();
    const me = gh.getUser();
    undeadLogger.log('ME', me);
    me
        .listGists()
        .then(function({ data }) {
            undeadLogger.log('FILES PROMISE', Object.keys(data[0].files));
            const results = data.map(item => ({
                htmlUrl: item.html_url,
                id: item.id,
                gitPullUrl: item.git_pull_url,
                description: item.description,
                ownerLogin: item.owner.login,
                avatarUrl: item.owner.avatar_url,
                files: Object.keys(item.files)
            }));
            response.status(200).send({
                count: results.length,
                result: results
            });
        })
        .catch(function(err) {
            undeadLogger.log('USER Promise Rejected', err);
            response.status(500).send({ result: err });
        });
});

module.exports = router;