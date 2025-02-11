import "./Button.css"

import { ButtonHTMLAttributes, FC } from "react"
import Text, { TextProps } from "@/components/Text"


export interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, Omit<TextProps, 'onClick'> {
    fullWidth?: boolean;
}

const Button: FC<Props> = ({ children,fullWidth, ...props }) => {
    return <Text width={fullWidth ? '100%' : ''} className="Button" as="button" {...props}>{children}</Text>
}

export default Button;