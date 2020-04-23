import React, { useContext } from "react";
import PropertyContext from "../context/PropertyContext";
import tw from "twin.macro";

const CardTags = tw.div`flex flex-row w-full justify-center px-2 py-4`;
const TagContainer = tw.div`flex text-xs font-semibold mx-2 py-2`;
// const TagSpan = tw.span`bg-gray-200 rounded-full shadow-md mx-2 px-3 py-2 text-gray-700 truncate`;

const Tags = () => {
  return (
    <>
      <CardTags>
        <TagContainer>
          <GetTags />
        </TagContainer>
      </CardTags>
    </>
  );
};

export default Tags;

export const GetTags = ({ children }) => {
  const propertyData = useContext(PropertyContext);
  const tagData = propertyData.map((tags) => tags.x_tags);
  const idData = propertyData.map((id) => id.id);
  // Remove Empty Tags
  let arr = tagData,
    tags = [];
  for (let i of arr) i && tags.push(i);
  arr = tags;
  const combine = { tags, idData };
  console.log([combine]);

  return (
    <>
      {/* {tags.map((data, index) => (
        <TagSpan key={index}>#{data}</TagSpan>
      ))} */}
    </>
  );
};
