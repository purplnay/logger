declare module 'purpl-logger' {
  /**
  * A module to date and prepend logs to log files.
  */
  export default {
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
  }
}
