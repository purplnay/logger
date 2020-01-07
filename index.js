const fs = require('fs');

/**
 * A logger that date and prepend logs to files.
 * 
 * @namespace
 */
const logger = {

  /**
   * The path to the file to add logs to.
   * 
   * @type {string}
   */
  path: 'logs.txt',

  /**
   * Whether to prepend the new log or not.
   * 
   * @type {boolean}
   */
  prepend: false,

  /**
   * Prepend logs to a file.
   * 
   * @param {string} message The log message.
   * @param {string} [file=logger.path] The filepath where to log the message to.
   * @param {boolean} [prepend=logger.prepend] Whether to prepend the new log or not.
   * @return {string} The full log message.
   */
  log: (message, file, prepend) => {
    let logFile = logger.path;
    let oldLogs = '';

    if (typeof file === 'string' && file.length) {
      logFile = file;
    }

    if (typeof prepend !== 'boolean') {
      prepend = logger.prepend;
    }

    if (fs.existsSync(logFile)) {
      oldLogs = fs.readFileSync(logFile, 'utf8');
    }

    const now = new Date().toLocaleString();
    const newLog = `${now}          ${message}`;
    const newLogs = prepend ? `${newLog}\n${oldLogs}` : `${oldLogs}${newLog}\n`;

    fs.writeFileSync(logFile, newLogs, 'utf8');

    return newLog;
  }
};

module.exports = logger;
