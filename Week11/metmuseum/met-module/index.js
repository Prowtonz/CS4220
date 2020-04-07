const config = require('./config');
const superagent = require('superagent');

const _formatDisplay = (response, limit) => {};

const search = async (term) => {
    try {
        const response = await superagent.get(`${config.url}/search?q=${term}`);
        return response.body;
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

const departments = async (id) => {
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
