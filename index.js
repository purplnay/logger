const fs = require('fs');

/**
 * A module to date and prepend logs to log files.
 */
const logger = {

  /**
   * The path to the file to add logs to.
   * 
   * @type {string}
   */
  path: 'logs.txt',

  /**
   * Prepend logs to a file.
   * 
   * @param {string} message The log message.
   * @param {string} [file=logger.path] The filepath where to log the message to.
   */
  log: (message, file) => {
    let logFile = logger.path;
    let oldLogs = '';

    if (typeof file === 'string' && file.length) {
      logFile = file;
    }

    if (fs.existsSync(logFile)) {
      oldLogs = fs.readFileSync(logFile, 'utf8');
    }

    const now = new Date().toLocaleString();
    const newLogs = `${now}          ${message}\n${oldLogs}`;

    fs.writeFileSync(logFile, newLogs, 'utf8');
  }
};

module.exports = logger;
