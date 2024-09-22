import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import { FC } from 'react';

export interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
    label: ReactNode
    error: ReactNode
}

/**
 * TextField
 */
const TextField: FC<Props> = ({ label, error, ...props}) => {
    return (
        <div>
            <label>
                <div>{label}</div>
                <input {...props} />
                <div>{error}</div>
            </label>
        </div>
    );
};

export default TextField;