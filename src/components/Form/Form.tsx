import React, { FormEvent, FormEventHandler, FormHTMLAttributes, ReactNode, useCallback, useEffect, useId, useMemo, useState } from "react";
import { FC } from "react";
import context, {FieldState} from "./context";

type validateFn = (value: any, fieldsState?: Record<string,FieldState>) => boolean;

interface ChildrenProps {
    isValid: boolean;
    isInvalid: boolean;
    values: Record<string, any>;
    onChange: FormEventHandler<Element>;
    submmitCount: number;
}

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
    initialValues?: Record<string, any>;    
    onSubmit: (values: any) => void;
    validationFields?: Record<string, validateFn | {validator: validateFn, message: string}>;
    children: ReactNode | ((props: ChildrenProps) => ReactNode);
    values?: Record<string, any>;
}

const reduceEntries = (fieldsState: Record<string, FieldState>, prop: string) => {
    return Object.entries(fieldsState).reduce((acc, [key, value]) => {
        acc[key] = value[prop];
        return acc;
    }, {})
};

const reduceIsProp = (fieldsState: Record<string, FieldState>, prop: keyof FieldState) => {
    return Object.values(fieldsState).every((state) => state[prop]);
};

const Form:FC<Props> = ({children, validationFields, initialValues = {}, onSubmit, ...props}) => {
    const id = useId();
    const [fieldsState, setFieldsState] = useState<Record<string, FieldState>>({});
    const [submmitCount, setSubmitCount] = useState(0);

    const values = useMemo(() => reduceEntries(fieldsState, 'value'), [fieldsState]);
    const isValid = useMemo(() => reduceIsProp(fieldsState, 'isValid'), [fieldsState]);
    const isTouched = useMemo(() => reduceIsProp(fieldsState, 'isTouched'), [fieldsState]);

    useEffect(() => {
        const fields = Object.keys(initialValues).reduce((acc, key) => {
            acc[key] = {value: initialValues[key], isInvalid: false, isValid: false, isTouched: false, isDirty: false};
            return acc;
        }, {});

        setFieldsState(fields);
    }, [initialValues]);

    const touchField = (fieldName: string) => {
        const state = fieldsState[fieldName];
        if(state && !state.isTouched) {
            fieldsState[fieldName] = {...state, isTouched: true};
        }
    }
    const onInnerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        setSubmitCount(submmitCount + 1);

        if(isValid) {    
            onSubmit(values);
        }
    };

    const validateForm = useCallback(() => {
        return Object.keys(fieldsState).map(key => {
            touchField(key);
            return validateField(key);  
        }).every(Boolean);
    }, [fieldsState]);

    const onChange = (e) => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;
        const fieldState = fieldsState[name];
        
        if(fieldState && fieldState.value !== value) {
            fieldState.value = (e.target as HTMLInputElement).value;
            setFieldsState({...fieldsState});
            validateField(name);
        }
    };

    const validateField = useCallback((fieldName: string) => {
        let state = fieldsState[fieldName];
        const validatorOpts = validationFields?.[fieldName];

        if(!state || !validatorOpts) return;

        let validator, message;
        if(typeof validatorOpts === 'function') {
            validator = validatorOpts;
        } else if(typeof validatorOpts === 'object') {
            ({validator, message} = validatorOpts);
            
        }

        const isValid = validator(state.value, fieldsState);
        const isInvalid = !isValid;
        const isDirty = state.isTouched && isInvalid;
        
        fieldsState[fieldName] = {...state, isValid, isInvalid, errorMessage: message, isDirty};
        setFieldsState({...fieldsState});

        return isValid;
    },[fieldsState]);

    const onBlur = (e) => {
        const name = (e.target as HTMLInputElement).name;
        const state = fieldsState[name];

        if(!state) return;

        const hasChanged = !state.isTouched;
        
        if(hasChanged) {
            fieldsState[name] = {...state, isTouched: true};
            validateField(name);
        }

    };

    const resetForm = useCallback(() => {
        Object.keys(fieldsState).forEach(key => {
            fieldsState[key] = {value: initialValues[key], isInvalid: false, isValid: false, isTouched: false};
        });

        setFieldsState({...fieldsState});
    }, [initialValues, fieldsState]);

    return (
        <context.Provider value={{fieldsState, isValid, isTouched, onChange, onBlur, resetForm, values, submmitCount}}>
            <form autoComplete="false" noValidate name={id} {...props} onSubmit={onInnerSubmit} >
                {typeof children === "function" ? children({isValid, isInvalid: !isValid, onChange, values, submmitCount}) : children}
            </form>
        </ context.Provider>
    );
}

export default Form;