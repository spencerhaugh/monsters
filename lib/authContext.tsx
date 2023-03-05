import { createContext, useContext, useEffect, useState } from 'react';
import { getUserFromLocalCookie } from './auth';

let userState;

type authContextType = {
    user: any;
    loading: boolean;
}

const authContextDefaultValues: authContextType = {
    user: null,
    loading: false
}

const UserContext = createContext<authContextType>(authContextDefaultValues);

export const UserProvider = ({ value, children }) => {
    const { user } = value;

    useEffect(() => {
        if (!userState && user) {
            userState = user;
        }
    }, [user]);

    return (
        <UserContext.Provider value={ value }>
            { children }
        </UserContext.Provider>
    )
};

export const useUser = () => useContext(UserContext);

export const useFetchUser = () => {
    const [data, setUser] = useState({
        user: userState || null,
        loading: userState === undefined,
    });

    const resolveUser = async (isMounted) => {
        const user = await getUserFromLocalCookie();
        if (isMounted) {
            setUser({ user, loading: false });
    }
    };

    useEffect(() => {
        if (userState !== undefined) {
            return;
        }

        let isMounted = true;
        resolveUser(isMounted);

        return () => {
            isMounted = false;
        };
    }, []);

    return data;
};