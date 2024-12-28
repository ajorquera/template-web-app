import React, { FormEvent, FormHTMLAttributes, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { FC } from "react";
import {validateFn, ContextProps, StateField, validateObj} from "./interfaces";
import context from "./context";

export interface Props extends Omit<FormHTMLAttributes<HTMLFormElement>, 'children'> {
    initialValues?: Record<string, any>;    
    onSubmit: (values: any) => void;
    validationFields?: Record<string, validateFn | validateObj>;
    children: ReactNode | ((props: ContextProps) => ReactNode);
    values?: Record<string, any>;
}

const Form:FC<Props> = ({children, validationFields, initialValues = {}, onSubmit, ...props}) => {
    const [values,  setValues]  = useState({});
    const [touched, setTouched] = useState({});
    const [errors,  setErrors]  = useState({});

    const [submmitCount, setSubmitCount] = useState(0);

    const isValid   = useMemo(() => !Object.values(errors).some(Boolean), [errors]);
    const isTouched = useMemo(() => Object.values(touched).some(Boolean), [touched]);

    const stateFields = useMemo<Record<string, StateField>>(() => {
        return Object.keys(values).reduce((acc, key) => {
            acc[key] = {
                value       : values[key], 
                isInvalid   : errors[key], 
                isValid     : !errors[key], 
                isTouched   : touched[key], 
                errorMessage: (validationFields?.[key] as validateObj)?.message ?? '',
                isDirty     : errors[key] && touched[key]
            };
            return acc;  
        }, {});
    }, [values, touched, errors, validationFields]);

    //Set initial values
    useEffect(() => {
        const fields = Object.keys(initialValues).reduce((acc, key) => {acc[key] = false; return acc;}, {});

        setValues({...initialValues});
        setTouched({...fields});    
        setErrors({...fields});        
    }, [initialValues]);

    const onInnerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = validateForm();
        setSubmitCount(submmitCount + 1);

        if(isValid) {    
            onSubmit(values);
        }
    };

    const validateForm = () => {
        const isValid = Object.keys(values).map(key => {
            touched[key] = true;
            return validateField(key);  
        }).every(Boolean);

        setErrors({...errors});
        setTouched({...touched});
        return isValid;
    };

    const onChange = (e) => {
        const name = (e.target as HTMLInputElement).name;
        const newValue = (e.target as HTMLInputElement).value;

        setValues({...values, [name]: newValue});
        validateField(name, newValue);
    };

    const validateField = useCallback((fieldName: string, newValue?) => {
        const value = newValue ?? values[fieldName];
        const validatorOpts = validationFields?.[fieldName];

        let validator;
        if(typeof validatorOpts === 'function') {
            validator = validatorOpts;
        } else if(typeof validatorOpts === 'object') {
            ({validator} = validatorOpts);
        }

        const isValid = validator(value, stateFields);
        const isInvalid = !isValid;
        errors[fieldName] = isInvalid;
        setErrors({...errors});  

        return isValid;
    },[stateFields, values, touched, errors, validationFields]);

    const onBlur = (e) => {
        const name = (e.target as HTMLInputElement).name;
        const isTouched = touched[name];
        
        if(!isTouched) {
            touched[name] = true;
            setTouched({...touched});

            validateField(name);
        }
    };

    const contextProps = useMemo(() => ({
        stateFields, 
        isValid,
        isInvalid: !isValid, 
        isTouched, 
        onChange, 
        onBlur, 
        values, 
        submmitCount
    }), [stateFields, submmitCount, isValid, isTouched]);

    return (
        <context.Provider value={contextProps}>
            <form autoComplete="off" noValidate {...props} onSubmit={onInnerSubmit}>
            {typeof children === "function" ? children(contextProps) : children}
            </form>
        </context.Provider>
    );
}

export default Form;