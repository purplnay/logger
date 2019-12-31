declare module 'purpl-logger' {
  type Logger = {
    /**
     * The path to the file to add logs to.
     */
    path: string,

    /**
     * Prepend logs to a file.
     * @param message The log message.
     * @param file The filepath where to log the message to.
     */
    log(message: string, file?: string): void
  };

  /**
  * A logger that date and prepend logs to files.
  */
  const logger: Logger;

  export default logger;
}
