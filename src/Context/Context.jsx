/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const [cart, setCart] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCart = () => {
    setCart(!cart);
  };

  return (
    <Context.Provider value={{ menu, handleMenu, cart, handleCart }}>
      {children}
    </Context.Provider>
  );
};
