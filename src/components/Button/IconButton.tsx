import { FC } from "react";
import Button, {type Props as ButtonProps} from "./Button";
import React from "react";

interface Props extends ButtonProps {

}

const IconButton: FC<Props> = ({...props}) => {
    return <Button {...props} />
};

export default IconButton;

