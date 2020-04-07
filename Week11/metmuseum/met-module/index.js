const config = require('./config');
const superagent = require('superagent');

const _formatDisplay = (response, limit) => {
    const { objectIDs } = response;
    const limited = objectIDs.splice(0, limit);

    // loop of the results and fetch each result by id
    // const formattedForLoop = []
    // for (let i = 0; i < limited.length; i++) {
    //     const artwork = await fetch(id)

    //     formattedForLoop.push({
    //         title: artwork.title,
    //         artist: artwork.artistDisplayName,
    //         id: objectID
    //     })
    // };

    const formatted = Promise.all(limited.map(async id => {
        const artwork = await fetch(id);

        return {
            title: artwork.title,
            artist: artwork.artistDisplayName,
            id: artwork.objectID
        }
    }));

    return formatted;
};

const search = async (term, department, format = true, limit = 20) => {
    // if there is a department
    // then apply the query &departmentId=${department}

    try {
        const response = await superagent.get(`${config.url}/search?q=${term}`);

        if (format) {
            return _formatDisplay(response.body, limit);
        } else {
            return response.body;
        }

    } catch (error) {
        return error;
    }
};

const fetch = async (id) => {
    try {
        const response = await superagent.get(`${config.url}/objects/${id}`);
        return response.body;
    } catch (error) {
        return error;
    }
};

const departments = async () => {
    try {
        const response = await superagent.get(`${config.url}/departments`);
        return response.body;
    } catch (error) {
        return error;
    }
};

module.exports = {
    search,
    fetch,
    departments,
};
