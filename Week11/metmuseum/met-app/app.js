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
    const searched = departments.filter((department) => {
        return department.displayName
            .toLowerCase()
            .includes(term.toLowerCase());
    });

    return searched;
};

const _displayArtResults = (results) => {
    const displayArt = results.map((result) => {
        return {
            name: `${result.title} - ${result.artist || 'Unknown'}`,
            value: result.id,
        };
    });

    return inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select an artwork.',
            choices: displayArt,
        },
    ]);
};

const _displayDepartments = (results) => {
    const displayDepts = results.map((result) => {
        return {
            name: result.displayName,
            value: result.departmentId,
        };
    });

    return inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Select an department.',
            choices: displayDepts,
        },
    ]);
};

const _promptUser = (question) => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'answer',
            message: question,
        },
    ]);
};

const _userInput = (question) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'answer',
            message: question,
        },
    ]);
};

const searchArt = async (term, department = null) => {
    const format = true;
    const limit = 20;

    const response = await met.search(term, department, format, limit);
    const choice = await _displayArtResults(response);
    const artwork = await met.fetch(choice.id);
    _print(artwork);
};

const searchDepartment = async (term = '') => {
    const response = await met.departments();
    const filtered = _filterDepartments(response.departments, term);
    const choice = await _displayDepartments(filtered);

    console.log(choice);
};

const advanceSearch = async () => {
    // prompt the user to search by department by filling _promptUser()

    // if the user answers true
    // prompt the user for a department term by using _userInput()
    // now the the search term call searchDepartment(term)

    // now prompt the user for an artwork term by using _userInput()

    // mow that you have both a department id and an artwork term
    // now call searchArt(term, department)

    // else
    // now prompt the user for an artwork term by using _userInput()
    // searchArt(term)
};

module.exports = {
    searchArt,
    searchDepartment,
    advanceSearch,
};
