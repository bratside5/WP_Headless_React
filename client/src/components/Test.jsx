import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faTree,
  faSnowboarding,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import tw from "tailwind.macro";
import PropertyContext from "../context/PropertyContext";
import TagsContext from "../context/TagsContext";

const Test = (props) => {
  const item = useContext(PropertyContext);
  return (
    <>
      {item &&
        item.map((result) => (
          <CardWrapper key={result.id}>
            <CardBody>
              <CardImage src={result.x_featured_media_original} alt="avatar" />
              <CardImageTagLine>
                <FontAwesomeIcon icon={faMountain} className="text-gray-100" />
                <SubHeading>{result.acf.subheading}</SubHeading>
              </CardImageTagLine>
              <CardTitle>
                <Title>{result.acf.title}</Title>
                <ShortDescription>
                  {result.acf.product_description}
                </ShortDescription>
                <MainText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus praesentium...
                </MainText>
              </CardTitle>
              <CardIcons>
                <IconContainer>
                  <FontAwesomeIcon icon={faTree} />
                  <IconText>{result.acf.tree_icon}</IconText>
                </IconContainer>
                <IconContainer c>
                  <FontAwesomeIcon icon={faSnowboarding} />
                  <IconText>{result.acf.snowboard_icon}</IconText>
                </IconContainer>
                <IconContainer>
                  <FontAwesomeIcon icon={faSnowflake} className=" " />
                  <IconText>{result.acf.snowflake_icon}</IconText>
                </IconContainer>
              </CardIcons>
              <CardTags>
                <TagContainer>
                  <GetTags />
                </TagContainer>
              </CardTags>
            </CardBody>
          </CardWrapper>
        ))}
    </>
  );
};

export default Test;

export const GetTags = ({ children }) => {
  const tags = useContext(TagsContext);
  return (
    <>
      {tags.map((tag, index) => (
        <TagSpan key={index}>#{tag.name}</TagSpan>
      ))}
    </>
  );
};

const CardWrapper = styled.div.attrs({
  className:
    "flex max-w-lg bg-white my-12 mx-8 shadow-xl items-center rounded-lg justify-center overflow-hidden",
})``;

const CardBody = styled.div.attrs({
  className: "border align-middle shadow-xl",
})``;

const CardImage = styled.img.attrs({
  className: "",
})``;

const CardImageTagLine = styled.div.attrs({
  className: "flex items-center py-4 px-4 bg-gray-900 md:px-6 md:py-4",
})``;

const CardTitle = styled.div.attrs({
  className: "bg-gray-700 text-gray-100 py-2 px-4",
})``;

const CardIcons = styled.div.attrs({
  className: "bg-gray-900 px-2 py-2 text-gray-100",
})``;

const IconContainer = styled.div.attrs({
  className: "flex items-center mt-2 px-2  font-bold",
})``;

const SubHeading = styled.div.attrs({
  className: "mx-3 text-gray-100 font-semibold text-lg",
})``;

const Title = styled.div.attrs({
  className: "text-2xl font-semibold",
})``;

const ShortDescription = styled.p.attrs({
  className: "text-lg",
})``;

const MainText = styled.div.attrs({
  className: "text-m",
})``;

const IconText = styled.div.attrs({
  className: "px-3 text-sm",
})``;

const CardTags = styled.div.attrs({
  className:
    "flex flex-row bg-gray-600 h-full w-auto py-4 md:py-8 justify-center align-middle content-center items-center",
})``;

const TagContainer = styled.div.attrs({
  className: "flex px-2 mx-auto text-xs max-h-2 md:max-h-8",
})``;

const TagSpan = styled.div.attrs({
  className:
    "bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2",
})``;
