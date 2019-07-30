const CLIEngine = require('eslint').CLIEngine;
const Linter = require('eslint').Linter;
const path = require('path');

const cli = new CLIEngine({
    configPath: path.resolve(process.cwd(), '.eslintrc.json'),
    // eslint --fix *
    fix: true
});

console.log(CLIEngine.version)

// run lint & get output for fix
const report = cli.executeOnFiles([path.resolve(process.cwd(), 'test.js')]);

// log about report
console.log('>> report', report);

// write fixed files to fs
CLIEngine.outputFixes(report);