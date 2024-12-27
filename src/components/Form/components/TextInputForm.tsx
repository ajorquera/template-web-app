import { FC, useMemo } from "react";
import TextInput, {TextInputProps} from "../../TextInput";
import React from "react";
import useForm from "../useForm";

export interface Props extends TextInputProps {

}

const TextInputForm:FC<Props> = ({ name, ...props}) => {
    const {onChange, onBlur, fieldsState} = useForm();
    const state = useMemo(() => fieldsState[name as string] ?? {}, [fieldsState[name as string]]);
    const error = state.isInvalid && state.isTouched ? (state.errorMessage ?? 'Invalid field') : '';

    return <TextInput error={error}  {...props} value={state.value as string ?? ''} name={name} onChange={onChange} onBlur={onBlur} />
}

export default TextInputForm;
export { Props as TextInputFormProps };