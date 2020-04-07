const config = require('./config');
const superagent = require('superagent');

// const _formatDisplayForLoop = async (response, limit) => {
//     const { objectIDs } = response;
//     const limited = objectIDs.splice(0, limit);

//     // same concept as _formatDisplay() but standard for loops do not require Promise.all
//     // each fetch is completed before the next iteration
//     const formattedForLoop = [];
//     for (let i = 0; i < limited.length; i++) {
//         const artwork = await fetch(id);

//         formattedForLoop.push({
//             title: artwork.title,
//             artist: artwork.artistDisplayName,
//             id: objectID,
//         });
//     }

//     return formattedForLoop;
// };

const _formatDisplay = (response, limit) => {
    const { objectIDs } = response;
    const limited = objectIDs.splice(0, limit);

    // create a new array using map which contains details on artwork fetched by id
    // map and forEach must be wrapped in a Promise.all otherwise the Promises are in a pending state
    const formatted = Promise.all(
        limited.map(async (id) => {
            const artwork = await fetch(id);

            return {
                title: artwork.title,
                artist: artwork.artistDisplayName,
                id: artwork.objectID,
            };
        })
    );

    return formatted;
};

const search = async (term, department, format = true, limit = 20) => {
    // if there is a department compose url string with departmentId else leave it empty
    const departmentId = department ? `&departmentId=${department}` : '';

    try {
        const response = await superagent.get(`${config.url}/search?q=${term}${departmentId}`);

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
