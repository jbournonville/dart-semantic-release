const glob = require("glob");
const {updateVersion} = require("./dart.js");
const {
    add,
    commit,
    push
} = require('@semantic-release/git/lib/git');

/**
 * @param {PluginConfig} pluginConfig
 * @param {Logger} logger
 * @param {Release} nextRelease
 * @param {ProcessEnv} env
 * @param {string} cwd
 * @param {Object} branch
 * @param {string} repositoryUrl
 * @returns {Promise<void>}
 */
module.exports = async function success(pluginConfig, {
    logger,
    nextRelease,
    env,
    cwd,
    branch,
    options: {repositoryUrl}
}) {

    const prepareNextRelease = pluginConfig.prepareNextVersion || false;
    const snapshotCommitMessage = pluginConfig.snapshotCommitMessage || 'prepare next version [skip ci]';
    const versionSuffix = pluginConfig.versionSuffix || '.next';

    const workingDir = pluginConfig.cwd ?? cwd;

    const filesToCommit = await glob('**/pom.xml', {
        workingDir,
        ignore: 'node_modules/**'
    });

    if (prepareNextRelease) {

        logger.log(
            'Write next version %s to pubspec.yaml in %s',
            nextRelease?.version,
            workingDir
        );

        updateVersion(workingDir, nextRelease.version + versionSuffix);


        const execaOptions = {env, cwd};
        logger.log('Staging all changed files: ' + filesToCommit.join(", "));
        await add(filesToCommit, execaOptions);
        logger.log('Committing all changed pom.xml');
        await commit(snapshotCommitMessage, execaOptions);
        logger.log('Pushing commit');
        await push(repositoryUrl, branch.name, execaOptions);
    }

}