import { createContext } from "react";

interface AuthContext {
    user: Record<string, any> | null;
    signin: (cb: () => void) => void;
    signout: (cb: () => void) => void;
}

const authContext = createContext<AuthContext>({
    user: null,
    signin: () => { },
    signout: () => { }
});

export default authContext;