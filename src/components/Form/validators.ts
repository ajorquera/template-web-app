import { validateObj } from "./interfaces";

export const regexVal = (regex: RegExp, message?: string) => {
    const validator = (value: string) => {
        return regex.test(value);
    }

    return message ? { validator, message } : validator;
};

export const validationPatterns: Record<string, validateObj> = {
    name: regexVal(/^[A-Za-z\s]+$/, 'Field must contain only letters'),
    email: regexVal(/\S+@\S+\.\S+$/, 'Field must be a valid email'),
    password: regexVal(/^\S{8,16}$/, 'Password must be between 8 and 16 characters')
}