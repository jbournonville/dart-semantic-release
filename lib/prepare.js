const {
    add,
    commit,
    push
} = require('@semantic-release/git/lib/git');
const path = require("path");
const {existsSync, readFileSync, writeFileSync} = require("fs");
const {updateVersion} = require("./dart.js");



/**
 * @param {PluginConfig} pluginConfig
 * @param {Logger} logger
 * @param {Release} nextRelease
 * @returns {Promise<void>}
 */
module.exports = async function prepare(pluginConfig, {
    logger,
    nextRelease,
    cwd
}) {

    const workingDir = pluginConfig.cwd ?? cwd;

    logger.log(
        'Write version %s to pubspec.yaml in %s',
        nextRelease?.version,
        workingDir
    );

    updateVersion(workingDir, nextRelease.version);
};