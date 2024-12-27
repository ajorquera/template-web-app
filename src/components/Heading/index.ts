import { FC } from "react";

export interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<Props> = ({ children }) => {
    return <Text as="h1" > { children } </Text>

}

export default Heading;