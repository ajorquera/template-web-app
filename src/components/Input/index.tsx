import React, { FC, InputHTMLAttributes } from "react"
import Box, { BoxProps } from "../Box"
import './Input.css'

interface Props extends BoxProps, InputHTMLAttributes<HTMLInputElement> {

}

const Input: FC<Props> = (props) => {
    return <Box className="Input" as="input" {...props} />;
}

export default Input;
export { Props as InputProps };