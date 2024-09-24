import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import { FC } from 'react';
import Text from '@/components/Text';

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
                <Text fontSize="12" display="block">{label}</Text>
                <input {...props} />
                <div>{error}</div>
            </label>
        </div>
    );
};

export default TextField;