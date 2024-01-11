/**
 * @typedef {Object} PluginConfig
 * @property {boolean} [prepareNextVersion=false] Whether next version number should be set after releasing.
 * @property {boolean} [versionSuffix=.next] Next version suffix.
 * @property {String} [cwd=process.cwd()] The current working directory to use. It should be configured to the root of the Git repository to release from.
 * @property {string} [snapshotCommitMessage='chore: prepare next version [skip ci]'] The commit message used if a new snapshot version should be created. */
