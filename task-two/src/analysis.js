"use strict";
exports.__esModule = true;
var fs = require('fs');
/**
 * First task - Read the csv files in the inputPath and analyse them
 *
 * @param {string[]} inputPaths An array of csv files to read
 * @param {string} outputPath The path to output the analysis
 */
function analyseFiles(inputPaths, outputPath) {
    fs.readFile(inputPaths, 'utf-8', function(err, data) {
        console.log(data);
    });
}
analyseFiles('../fixtures/inputs/small-sample.csv', '../fixtures/outputs/small-sample.csv');
exports["default"] = analyseFiles;