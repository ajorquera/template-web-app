import { useAuth } from "@/components/Auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
    const { signOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        signOut();
        navigate("/login");
    }, [signOut, navigate]);

    return null
};

export default Logout;