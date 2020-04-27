import React, { useContext } from "react";
import PropertyContext from "../../context/PropertyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMountain,
  faTree,
  // faSnowboarding,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import Tags from "../Tags";
import {
  CardWrapper,
  CardImage,
  CardBody,
  CardList,
  CardTitle,
  CardPrice,
  CardSubHeading,
} from "../tailwind_ui/lib";

const BlogCard = (props) => {
  // const propertyData = useContext(PropertyContext);
  return (
    <>
      {/* {propertyData.map((result, index) => ( */}
      <CardWrapper>
        {/* <Link to={`/latest-news/${result.id}`}> */}
        {/* <CardImage src={result.x_featured_media_original} /> */}
        <CardBody>
          <CardList>#</CardList>
          <CardTitle>Lorem, ipsum.</CardTitle>
          <CardPrice>Lorem ipsum dolor sit amet.</CardPrice>
          <CardSubHeading>
            ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            corrupti?
          </CardSubHeading>
          {/* <Tags result={result} /> */}
        </CardBody>
        {/* </Link> */}
      </CardWrapper>
      {/* ))} */}
    </>
  );
};

export default BlogCard;
