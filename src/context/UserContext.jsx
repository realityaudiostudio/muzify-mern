import { createContext,useState,useContext } from "react";


const UserContext = createContext();

export const UserProvider = ({children})=> {
    const [user,setUser] = useState(null);

    const login = (username,email) =>
    {
        setUser({username,email});
    };
    const logout = () =>
    {
        setUser(null);
    };
    return (
        <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);