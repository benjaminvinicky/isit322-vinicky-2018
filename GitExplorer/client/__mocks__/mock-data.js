const getData = url => {
    switch (url) {
        case '/api/foo':
            return {
                status: 'Mock Server Happy',
                file: 'api.js',
                result: 'success'
            };

        case '/api/user':
            return {
                error: {},
                response: {},
                body: JSON.stringify({
                    login: 'Benjamin Vinicky',
                    pic: 'myURL'
                })
            };

        case '/api/bar':
            return {
                youRang: 'Hello'
            };

        default:
            return {};
    }
};

export default getData;
