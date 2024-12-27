import{ createContext, FormEvent, ChangeEventHandler } from "react";

type inputValue = string | number | boolean | undefined;

export interface FieldState {
    value        : inputValue;
    isTouched    : boolean;
    isValid      : boolean;
    isInvalid    : boolean;
    isDirty      : boolean;
    errorMessage?: string;
}

interface ContextProps {
    isValid: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur: ChangeEventHandler<HTMLInputElement>;
    isTouched: boolean;
    fieldsState: Record<string, FieldState>;
}

const context = createContext<ContextProps>({
    isValid: false,
    isTouched: false,
    onChange: () => {},
    onBlur: () => {},
    fieldsState: {},
});

export default context;
export {ContextProps};