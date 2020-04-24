import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [data, loading] = useFetch("/wp-json/wp/v2/products");
  if (loading) {
    return <Loading />;
  } else {
    return (
      <PropertyContext.Provider value={data}>
        {children}
      </PropertyContext.Provider>
    );
  }
};

export default PropertyContext;

// useEffect(() => {
//   fetchItem();
// }, []);
// const [item, setItem] = useState([]);
// const fetchItem = async () => {
//   const fetchItem = await fetch(
//     `http://api.igbot.local/wp-json/wp/v2/products`
//   );
//   const item = await fetchItem.json();
//   setItem(item);
// };
