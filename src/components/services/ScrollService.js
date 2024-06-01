import React, { createContext, useContext, useRef } from "react";

const ScrollService = createContext();

export const ScrollProvider = ({ children }) => {
  const ourServicesRef = useRef(null);

  const scrollToOurServices = () => {
    if (ourServicesRef.current) {
      ourServicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollService.Provider value={{ ourServicesRef, scrollToOurServices }}>
      {children}
    </ScrollService.Provider>
  );
};

export const useScroll = () => useContext(ScrollService);
