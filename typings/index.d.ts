declare module 'purpl-logger' {

  /**
   * The path to the file to add logs to.
   */
  const path: string

  /**
   * Whether to prepend the new log or not.
   */
  const prepend: boolean

  /**
   * Prepend logs to a file.
   * @param message The log message.
   * @param file The filepath where to log the message to.
   * @param prepend Whether to prepend the new log or not.
   * @return The full log message.
   */
  const log: (message: string, file?: string, prepend?: boolean) => string

  /**
    * A logger that date and prepend logs to files.
    */
  type Logger = {

    /**
   * The path to the file to add logs to.
   */
    path: string,

    /**
     * Whether to prepend the new log or not.
     */
    prepend: string,

    /**
     * Prepend logs to a file.
     * @param message The log message.
     * @param file The filepath where to log the message to.
     * @param prepend Whether to prepend the new log or not.
     * @return The full log message.
     */
    log(message: string, file?: string, prepend?: boolean): string
  }

  const logger: Logger

  export {
    path,
    prepend,
    log
  }

  export default logger
}
