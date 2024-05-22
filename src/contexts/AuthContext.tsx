import { createContext, useState } from "react";
import { FCC } from "../@types/types";

export const AuthContext = createContext({
    //@ts-ignore
    toggle: (data: boolean) => { },
    isManager: false
})
const AuthProvider: FCC = ({ children }) => {


    const [isManager, setManger] = useState(false);
    const toggle = (data: boolean) => {
        setManger(data)
    };
    return (
        <AuthContext.Provider value={{ toggle, isManager }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider