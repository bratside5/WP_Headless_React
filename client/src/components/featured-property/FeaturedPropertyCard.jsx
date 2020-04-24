import React, { useContext } from "react";
import tw from "twin.macro";
import PropertyContext from "../../context/PropertyContext";
// import Tags from "../Tags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMountain,
  faTree,
  // faSnowboarding,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const CardWrapper = tw.div`flex flex-col  border border-gray-300 my-4 shadow-lg rounded-lg`;
const CardImage = tw.img`w-full h-48 bg-center bg-cover`;
const CardBody = tw.div`py-2 px-3`;
const CardList = tw.div`text-gray-600 text-xs uppercase font-semibold tracking-wide pt-2`;
const CardTitle = tw.div`text-lg font-semibold text-gray-800 py-1 truncate`;
const CardPrice = tw.div`py-1 text-gray-600 font-semibold`;
const CardSubHeading = tw.div`text-gray-700 px-1`;
const Divider = tw.div`flex h-px w-3/4 bg-gray-400 justify-center content-center align-middle items-center my-3 mx-auto text-center`;
const IconContainer = tw.div`flex-col min-w-full text-xs font-semibold`;
const CardIcons = tw.div`flex justify-center content-start align-text-top py-1 mt-1 text-gray-600 `;
const IconText = tw.div`w-3/4 flex justify-start content-start pl-4 pb-1`;

const FeaturedPropertyCard = () => {
  const propertyData = useContext(PropertyContext);
  return (
    <>
      {propertyData.map((result, index) => (
        <CardWrapper key={index}>
          <Link to={`/featured-properties/${result.id}`}>
            <CardImage src={result.x_featured_media_original} />
            <CardBody>
              <CardList>3 Beds / 2 Baths</CardList>
              <CardTitle>{result.acf.title}</CardTitle>
              <CardPrice>From £{result.acf.price} / wk</CardPrice>
              <CardSubHeading>
                {result.acf.product_description}... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas, corrupti?
              </CardSubHeading>
              <Divider />
              <IconContainer>
                <CardIcons>
                  <FontAwesomeIcon icon={faMountain} />
                  <IconText>3536m Highest Altitude</IconText>
                </CardIcons>
                <CardIcons>
                  <FontAwesomeIcon icon={faTree} />
                  <IconText>Stunning Scenery</IconText>
                </CardIcons>
                <CardIcons>
                  <FontAwesomeIcon icon={faSnowflake} />
                  <IconText>Snow Sure</IconText>
                </CardIcons>
              </IconContainer>
            </CardBody>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default FeaturedPropertyCard;
