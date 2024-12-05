import React, { createContext, useState } from 'react';

// Create the context
export const SendContext = createContext();

// Create the provider component
export const UserProvider = ({ children }) => {
  const [globename, setGlobename] = React.useState('');

  return (
    <SendContext.Provider value={{ globename, setGlobename }}>
      {children}
    </SendContext.Provider>
  );
};