import { useState } from "react";
import { signIn as amplifySignIn, signOut as amplifySignOut } from 'aws-amplify/auth'

const useProvideAuth = () => {
    const [user, setUser] = useState(null);

  const signIn = cb => {
    return amplifySignIn(() => {
      setUser("user");
      cb?.();
    });
  };

  const signOut = cb => {
    return amplifySignOut(() => {
      setUser(null);
      cb?.();
    });
  };

  return {
    user,
    signIn,
    signOut
  };
};

export default useProvideAuth;