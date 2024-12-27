import "./Button.css"

import { ButtonHTMLAttributes, FC } from "react"
import Text, { TextProps } from "../Text"
import React from "react"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, TextProps {

}

const Button: FC<Props> = ({ children, ...props }) => {
    return <Text className="Button" as="button" {...props}>{children}</Text>
}

export default Button;