declare module 'purpl-logger' {
  type Logger = {
    /**
     * The path to the file to add logs to.
     */
    path: string,

    /**
     * Whether to prepend the new log or not.
     */
    prepend: boolean;

    /**
     * Prepend logs to a file.
     * @param message The log message.
     * @param file The filepath where to log the message to.
     * @param prepend Whether to prepend the new log or not.
     * @return The full log message.
     */
    log(message: string, file?: string, prepend?: boolean): string
  };

  /**
  * A logger that date and prepend logs to files.
  */
  const logger: Logger;

  export default logger;
}
