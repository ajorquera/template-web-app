import { FC } from 'react';
import Box, {BoxProps} from '@/components/Box';
import { Link } from 'react-router-dom';

export interface Props extends BoxProps {

}

/**
 * Dashboard
 */
const Dashboard: FC<Props> = ({children, ...props}) => {
    return (
        <Box {...props}>
            <h1>Dashboard</h1> 
            <Link to="/logout">
                <button>Logout</button>
            </Link>
        </Box>
    );
};

export default Dashboard;