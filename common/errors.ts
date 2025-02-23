import { Formatter, Translation } from "../common/l10n";

// The LocalizedError class represents an error with a localized message.
// It takes a message key and optional arguments to format the message.
export class LocalizedError<T extends keyof Translation> {
    public args: any[];
    public message: T;

    constructor(msg: T, ...args: Translation[T] extends Formatter ? Parameters<Translation[T]> : never) {
        this.message = msg;
        this.args = args;
    }
}

export type LocalizedErrors = LocalizedError<keyof Translation>;

// This function retrieves the localized error message based on the provided error and translation.
// If the error message exists in the translation, it formats the message with the provided arguments.
export function getErrorMessage(error: Error | LocalizedErrors, l10n: Translation): string {
    if (error.message in l10n) {
        const localizedError = error as LocalizedErrors;
        const translated = l10n[localizedError.message];
        if (translated instanceof Function) {
            const translateFunction = translated as Formatter;
            return translateFunction(...localizedError.args);
        } else {
            return translated;
        }
    } else {
        return error.message;
    }
}
