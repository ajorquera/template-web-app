import { FC, SVGProps, useMemo } from "react";
import Button, {type Props as ButtonProps} from "./Button";
import Flex from "@/components/Flex";

interface IconProps {
    color: string;
    width: number;
    height: number;
}

export interface Props extends ButtonProps {
    icon: FC;
    iconProps?: IconProps;
}

const processIconProps = (iconProps?:IconProps) => {
    return {width: 24, height: 24, stroke: iconProps?.color, fill: iconProps?.color, ...iconProps} as SVGProps<SVGSVGElement>;
}

const IconButton: FC<Props> = ({icon: Icon, iconProps, children, ...props}) => {
    const innerIconProps = useMemo(() => processIconProps(iconProps), [iconProps]);

    return (
        <Button {...props}>
            <Flex justifyContent="center" alignItems="center" gap={8}>
                {Icon && <Icon {...innerIconProps} />}
                {children}
            </Flex>
        </Button>
    )
};

export default IconButton;

