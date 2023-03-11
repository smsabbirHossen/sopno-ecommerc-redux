import React, { createContext, useState, useContext } from "react";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Context.Provider value={{ showSidebar, setShowSidebar }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
