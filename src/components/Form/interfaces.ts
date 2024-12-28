import { ChangeEventHandler } from "react";

export interface StateField {
    value: inputValue;
    isTouched: boolean;
    isValid: boolean;
    isInvalid: boolean;
    isDirty: boolean;
    errorMessage?: string;
}

export interface ContextProps {
    submmitCount: number;
    isValid: boolean;
    isInvalid: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur: ChangeEventHandler<HTMLInputElement>;
    isTouched: boolean;
    stateFields: Record<string, StateField>;
}

export type validateFn = (value: any, fieldsState?: Record<string, StateField>) => boolean;
export type validateObj = { validator: validateFn, message: string };
export type inputValue = string | number | boolean | undefined;