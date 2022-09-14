import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const getLocalStorage = (text) => {
  let item = localStorage.getItem(text);
  if (item) {
    return (item = JSON.parse(localStorage.getItem(text)));
  } else return null;
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getLocalStorage("user"));
  const [userChanged, setUserChanged] = useState(getLocalStorage("changed"));

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("changed", JSON.stringify(userChanged));
    }
  }, [user, userChanged]);

  return (
    <AppContext.Provider value={{ user, setUser, userChanged, setUserChanged }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
