"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext<ContextInterface>({
  _username: "",
  _isOrganiser: false,
  login: () => {},
  logout: () => {},
});

interface ContextInterface {
  _username: string;
  _isOrganiser: boolean;
  login: (username: string, isOrganiser: boolean) => void;
  logout: () => void;
}
export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [_username, setUsername] = useState("");
  const [_isOrganiser, setIsOrganiser] = useState(false);

  const login = (userName: string, isOrganiser: boolean) => {
    // Implement your login logic here
    console.log("LOGGING ÌN woth ", userName);
    setUsername(userName);
    setIsOrganiser(isOrganiser);
  };

  const logout = () => {
    // Implement your logout logic here
    setUsername("");
  };

  const contextValue: ContextInterface = {
    _username,
    _isOrganiser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
