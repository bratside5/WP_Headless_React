import React, { useState, createContext, useEffect } from "react";

export const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  useEffect(() => {
    fetchItem();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItem = async () => {
    const fetchItem = await fetch(`http://api.igbot.local/wp-json/wp/v2/tags`);
    const items = await fetchItem.json();
    setItems(items);
    console.log(items);
  };

  return <TagsContext.Provider value={items}>{children}</TagsContext.Provider>;
};

export default TagsContext;
