import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import HeroFPP from "./Hero_FeaturedPropertyPage";

const FeaturedPropertyPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [item, setItem] = useState({
    acf: {},
  });
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.igbot.local/wp-json/wp/v2/products/${id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <>
      <HeroFPP item={item} />
    </>
  );
};

export default FeaturedPropertyPage;
