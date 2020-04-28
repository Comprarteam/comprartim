#!/usr/bin/env node;
'use strict'

const execSync = require('child_process').execSync;

/**
 * Read the current git version. replace(...) removes all non printable characters
 * from version string.
 *
 * @returns {string} The version
 */
function getGitVersion () {
    return execSync('git log -n 1 --pretty=format:"%h"').toString();
}

module.exports = {
    getGitVersion
}