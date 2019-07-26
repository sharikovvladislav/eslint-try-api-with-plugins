const CLIEngine = require('eslint').CLIEngine;
const Linter = require('eslint').Linter;
const path = require('path');

const cli = new CLIEngine({
    configPath: path.resolve(process.cwd(), '.eslintrc.json')
});

const linter = new Linter();

const result = linter.verifyAndFix('var foo', cli.getConfigForFile("script.js"));

console.log(result);