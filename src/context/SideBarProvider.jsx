import React, { createContext, useState, useEffect } from 'react';

export const SideBarContext = createContext();

const SideBarProvider = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const contextValues = {
    isNavOpen,
    setIsNavOpen,
  };

  return (
    <div>
      <SideBarContext.Provider value={contextValues}>
        {children}
      </SideBarContext.Provider>
    </div>
  );
};

export default SideBarProvider;
