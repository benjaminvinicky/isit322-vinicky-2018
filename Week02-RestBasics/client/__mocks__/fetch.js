const elfFetch = (url) => {
    return new Promise((resolve) => {
        resolve({
            ok: true,
            json: function() {
                return getData(url);
            }
        });
    });
};

global.fetch = jest.fn().mockImplementation(elfFetch);

module.exports = elfFetch;