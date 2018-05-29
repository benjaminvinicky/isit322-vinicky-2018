import flux from './images/flux.jpeg';

var appInit = {
    file: 'File name will be placed here.',
    status: 'status will go here',
    result: 'result will go here',
    name: 'Not Logged In',
    message: 'Waiting',
    pic: flux,
    login: 'unknown',
    url:'blank',
    location: 'unknown',
    company: 'unknown',
    gists: [
        {
            htmlUrl: 'unknown',
            id: 'unknown',
            description: 'unknown',
            ownerLogin: 'unknown',
            avatarUrl: flux,
            files: 'unknown'
        },
        {
            htmlUrl: 'test',
            id: 'test',
            description: 'test',
            ownerLogin: 'test',
            avatarUrl: flux,
            files: 'test'
        }
    ],
    index: 0,
    count: 2
};

export default appInit;
