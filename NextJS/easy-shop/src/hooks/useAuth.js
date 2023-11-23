/** @format */

import AuthContext from "@/contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => {
    const auth = useContext(AuthContext);
    const isClient = typeof window !== "undefined";
    if (!isClient && !auth) {
    }
    if (!auth) {
        throw new Error("your must wrap your ");
    }
    return auth;
};

export default useAuth;
