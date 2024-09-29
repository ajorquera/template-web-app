import { FC, PropsWithChildren } from 'react';
import Card, {CardProps} from '@/components/Card';

export interface Props extends PropsWithChildren {

}

/**
 * Message
 */
const Message: FC<Props> = ({children, ...props}) => {
    return (
        <Card fontSize={14} padding={10} display="inline-block" {...props}>
            {children}
        </Card>
    );
};

export default Message;