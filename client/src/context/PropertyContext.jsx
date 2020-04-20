import React, { useState, createContext, useEffect } from "react";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  useEffect(() => {
    fetchItem();
  }, []);
  const [item, setItem] = useState([]);
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.igbot.local/wp-json/wp/v2/products/`
    );
    const item = await fetchItem.json();
    setItem(item);
  };
  return (
    <PropertyContext.Provider value={item}>{children}</PropertyContext.Provider>
  );
};

export default PropertyContext;
