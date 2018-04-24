const mockData = (url) => {
    switch (url) {
    case '/api/foo':
        return {
            foo: 'bar',
            file: 'api.js'
        };

    case '/api/user':
        return {
            error: {},
            response: {},
            body: JSON.stringify({
                login: 'Robin Dudette'
            })
        };

    default:
        return {};
    }
};

export default mockData;

