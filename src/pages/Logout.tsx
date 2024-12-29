import { useAuthenticator } from '@aws-amplify/ui-react';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Logout
 */
const Logout: FC = () => {
    const {signOut} = useAuthenticator();
    let navigate = useNavigate();
    useEffect(() => {
        signOut()
        navigate('/login');
    },[]);
    
    return null;
};

export default Logout;