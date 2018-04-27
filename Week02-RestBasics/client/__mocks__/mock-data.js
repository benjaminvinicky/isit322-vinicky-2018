const getData = (url) => {
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
                    login: 'Robin Dudette'
                })
            };

        default:
            return {}
    }
};

export default getData;