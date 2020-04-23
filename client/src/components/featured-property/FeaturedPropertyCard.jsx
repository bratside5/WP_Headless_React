import React, { useContext } from "react";
import tw from "twin.macro";
import PropertyContext from "../../context/PropertyContext";
import Tags from "../Tags";

const CardWrapper = tw.div`flex flex-col  border border-gray-300 my-4 shadow-lg rounded-lg`;
const CardImage = tw.img`w-full h-48 bg-center bg-cover`;
const CardBody = tw.div`py-2 px-3`;
const CardList = tw.div`text-gray-600 text-xs uppercase font-semibold tracking-wide pt-2`;
const CardTitle = tw.div`text-lg font-semibold text-gray-800 py-1 truncate`;
const CardPrice = tw.div`py-1 text-gray-600 font-semibold`;
const CardSubHeading = tw.div`text-gray-700 px-1`;
const CardIcons = tw.div``;

const FeaturedPropertyCard = () => {
  const propertyData = useContext(PropertyContext);
  return (
    <>
      {propertyData.map((result, index) => (
        <CardWrapper key={index}>
          <CardImage src={result.x_featured_media_original} />
          <CardBody>
            <CardList>3 Beds / 2 Baths</CardList>
            <CardTitle>{result.acf.title}</CardTitle>
            <CardPrice>From £{result.acf.price} / wk</CardPrice>
            <CardSubHeading>
              {result.acf.product_description}... Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quas, corrupti?
            </CardSubHeading>
            <CardIcons></CardIcons>
            <Tags result={result} />
          </CardBody>
        </CardWrapper>
      ))}
    </>
  );
};

export default FeaturedPropertyCard;
