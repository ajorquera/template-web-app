import { FC, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

const Flex: FC<Props> = ({children, alignItems, justifyContent}) => {
    return (
        <div style={{display: 'flex', alignItems, justifyContent}}>
            {children}
        </div>
    )
};

export default Flex;