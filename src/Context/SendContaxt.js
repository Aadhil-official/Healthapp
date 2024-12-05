import React, { createContext, useState } from 'react';

export const SendContext = createContext();

export const UserProvider = ({ children }) => {
  const [globename, setGlobename] = React.useState('');

  return (
    <SendContext.Provider value={{ globename, setGlobename }}>
      {children}
    </SendContext.Provider>
  );
};