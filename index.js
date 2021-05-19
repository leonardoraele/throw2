/**
 * Function wrapper for throw statement.
 * Throw an error with formatted message.
 * @param {Error|Function|any} error — instance of error, error class or error message.
 * @param {...any} args
 * @throws {Error}
 */
module.exports = function(error, ...args)
{
    throw error instanceof Error      ? error
        : typeof error === 'function' ? new error(...args)
        : new Error([error, ...args].join(' '));
};
