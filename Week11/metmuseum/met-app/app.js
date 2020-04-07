const inquirer = require('inquirer');
const met = require('met-module');

const _print = (data) => {
    const { title, artistDisplayName, objectName, medium, department } = data;
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
    console.log(title.toUpperCase());
    console.log(`Artist: ${artistDisplayName || 'unknown'}`);
    console.log(`Art Type: ${objectName}`);
    console.log(`Medium: ${medium}`);
    console.log(`Classification: ${department}`);
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - ');
};

const _filterDepartments = (departments, term) => {

};

const _displayArtResults = (results) => {

};

const _displayDepartmentResults = (results) => {

};

const _promptUser = (question) => {

};

const _userInput = (type) => {

};

const searchArt = async (term, department) => {
    const response = await met.search(term, department);

};

const searchDepartment = async (term = '') => {
    const response = await met.departments();

};

const advanceSearch = async () => {

}

module.exports = {
    searchArt,
    searchDepartment,
    advanceSearch
};
