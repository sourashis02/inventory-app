import { createContext, useState } from "react";

export const AccessContext = createContext({
    userAccess: false,
    updateUserAccess: () => { }
});

export function AccessProvider({ children }) {
    const [userAccess, setUserAccess] = useState(true);
    const updateUserAccess = () => {
        setUserAccess(prev => !prev);
    }
    const data = {
        userAccess,
        updateUserAccess
    }
    return (
        <AccessContext.Provider value={data}>
            {children}
        </AccessContext.Provider>
    );
}