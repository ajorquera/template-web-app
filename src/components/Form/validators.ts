export const regexVal = (regex: RegExp, message?: string) => {
    const validator = (value: string) => {
        return regex.test(value);
    }

    return message ? { validator, message } : validator;
};