import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Link, {LinkProps} from "../Link";

interface Props extends LinkProps {
    href: string;
}

const RouterLink:FC<Props> = ({ href, children }) => {
    const navigate = useNavigate();

    const onClick = (e) => {
        e.preventDefault();
        navigate(href);
    };

    return <Link onClick={onClick}>{children}</Link>;
}

export default RouterLink;