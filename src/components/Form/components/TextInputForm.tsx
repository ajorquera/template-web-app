import { FC, useMemo } from "react";
import TextInput, {TextInputProps} from "../../TextInput";
import React from "react";
import useForm from "../hooks/useForm";

export interface Props extends TextInputProps {

}

const TextInputForm:FC<Props> = ({ name, ...props}) => {
    const {onChange, onBlur, stateFields} = useForm();
    const state = useMemo(() => stateFields[name as string] ?? {}, [stateFields]);
    const value = state.value as string ?? '';
    const error = state.isDirty && state.errorMessage;

    return <TextInput error={error}  {...props} value={value} name={name} onChange={onChange} onBlur={onBlur} />
}

export default TextInputForm;
export { Props as TextInputFormProps };