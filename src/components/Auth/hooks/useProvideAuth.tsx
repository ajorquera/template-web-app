import { useCallback, useEffect, useState } from "react";
import { signIn as amplifySignIn, signOut as amplifySignOut, getCurrentUser } from 'aws-amplify/auth'

const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCurrentUser().then(currentUser => {
      setUser(currentUser);
    });
  }, []);

  const signIn =  useCallback(async props => {
    let response;
    setLoading(true);
    try {
      response = await amplifySignIn(props);
    } catch (error) {
      if (error.name === 'UserAlreadyAuthenticatedException') {
        signOut();
      } 
      
      response = Promise.reject(error);
    }

    if (response?.nextStep?.signInStep === 'DONE') {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }

    setLoading(false);
    return response;
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    const response = await amplifySignOut();
    setUser(null);
    setLoading(false);
    return response;
  },[]);

  return {
    user,
    loading,
    signIn,
    signOut
  };
};

export default useProvideAuth;