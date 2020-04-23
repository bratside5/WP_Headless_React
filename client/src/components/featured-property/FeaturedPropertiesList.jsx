import React from "react";
import tw from "twin.macro";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const GridWrapper = tw.div`px-8 py-4`;
const GridContainer = tw.div`sm:px-8 md:px-20`;
const SectionTitle = tw.div`text-2xl `;
const CardContainer = tw.div`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 `;

const FeaturedPropertiesList = () => {
  return (
    <>
      <GridWrapper>
        <SectionTitle>Featured Properties</SectionTitle>
        <GridContainer>
          <CardContainer>
            <FeaturedPropertyCard />
          </CardContainer>
        </GridContainer>
      </GridWrapper>
    </>
  );
};

export default FeaturedPropertiesList;
