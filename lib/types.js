/**
 * @callback loggerLog
 * @param {string} format - A formatted string that possibly contains placeholders.
 * @param {...*} substitutions - Corresponding replacements for placeholders in the format string.
 */

/**
 * @callback loggerError
 * @param {(string|Error)} msg
 */


/**
 * @typedef {Object} Logger
 * @property {loggerLog} log
 * @property {loggerError} error
 */

/**
 * @typedef {Object} Release
 * @property {string} version
 */
