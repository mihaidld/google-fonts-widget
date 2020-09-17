import React, { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState(
    "Portez ce vieux whisky au juge blond qui fume !? 0123456789"
  );
  const [fontSize, setFontSize] = useState(20);

  return (
    <Context.Provider
      value={{ inputText, setInputText, fontSize, setFontSize }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
