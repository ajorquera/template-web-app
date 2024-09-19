import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    width?: number | string;
    height?: number | string;
}

const Box: FC<Props> = ({width, height, children}) => {
    return <div style={{width, height}}>{children}</div>
}

export default Box;