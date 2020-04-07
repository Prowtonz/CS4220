const yargs = require('yargs');

const app = require('./app');

const flags = yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command: 'artwork',
        desc: 'search for artwork on met museum',
        builder: (yargs) => {
            return yargs
                .options('n', {
                    alias: 'name',
                    describe: 'search by name of artwork'
                });
        },
        handler: (argv) => {
            app.searchArt(argv.name);
        },
    })
    .command({
        command: 'department',
        desc: 'search for departments on met museum',
        builder: (yargs) => {
            return yargs
                .options('n', {
                    alias: 'name',
                    describe: 'search by name of department'
                });
        },
        handler: (argv) => {
            app.searchDepartment(argv.name);
        },
    })
    .command({
        command: 'advanced',
        desc: 'advanced search for artwork by department on met museum',
        handler: () => {
            app.advanceSearch();
        },
    })
    .help('help').argv;
