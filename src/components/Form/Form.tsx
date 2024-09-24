import React, { createRef, FormEvent, FormEventHandler, FormHTMLAttributes, PropsWithChildren, ReactNode, useEffect, useId, useState } from "react";
import { FC } from "react";

type validateFn = (value: any) => boolean;

interface ChildrenProps {
    isValid: boolean;
    isInvalid: boolean;
    onChange: FormEventHandler<Element>;
}

export interface Props extends FormHTMLAttributes<HTMLFormElement> {
    initialValues?: Record<string, any>;    
    onSubmit: (values: any) => void;
    validationFields?: Record<string, validateFn>;
    children: (args: ChildrenProps) => ReactNode | ReactNode | ReactNode[];
    values?: Record<string, any>;
}

const Form:FC<Props> = ({children, validationFields, initialValues = {}, onSubmit, ...props}) => {
    const id = useId();
    const [isValid, setIsValid] = useState(true);
    const [values, setValues] = useState(initialValues);
    const ref = createRef<HTMLFormElement>();

    useEffect(() => {
        const formEl = ref.current;
        if(!formEl) return;

        const formData = new FormData(formEl);
            const values: any = {};

            formData.forEach((value, key) => {
                values[key] = value;
            });

            setValues(values);
    }, [children, ref.current]);

    const onInnerSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(isValid) {    
            onSubmit(values);
        }
    };

    const checkIsInvalid = (e: FormEvent<HTMLFormElement>) => {
        const isInvalid =  Object.entries(values).some(([key, value]) => {
            const validator = validationFields?.[key];
            const isValid = validator ? validator(value) : true;
            return !isValid;
        });

        setIsValid(!isInvalid);

        return isInvalid;
    };

    

    const onChange = (e: FormEvent<HTMLFormElement>) => {
        const name = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;
        
        if(values[name] !== value) {
            values[name] = (e.target as HTMLInputElement).value;
            setValues({...values});
        }
        
        checkIsInvalid(e);
    }

    return (
        // @ts-ignore-next-line - action can be a function
        <form autoComplete="false" noValidate name={id} {...props} onSubmit={onInnerSubmit} >
            {typeof children === "function" ? children({isValid, isInvalid: !isValid, onChange, values}) : children}
        </form>
    );
}

export default Form;