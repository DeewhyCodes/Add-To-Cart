import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("clicked");
    const newUser = { email: email, password: password };
    setUser(true);
  };

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        user,
        handleLogin,
        handleEmailChange,
        handlePasswordChange,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
