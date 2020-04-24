import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";

function FeaturedPropertyHeroImage({ item }) {
  return (
    <>
      <HeroWrapper>
        <HeroImgContainer
          style={{
            backgroundImage: `url('${item.x_featured_media_original}')`,
          }}
        >
          <ImgOverlay id="blackOverlay"></ImgOverlay>
        </HeroImgContainer>
        <MainWrapper>
          <TextWrapper>
            <TextContainer>
              <HeroHeader>{item.acf.title}</HeroHeader>
              <HeroSubHeader>{item.acf.subheading}</HeroSubHeader>
            </TextContainer>
          </TextWrapper>
        </MainWrapper>
      </HeroWrapper>
    </>
  );
}

export default FeaturedPropertyHeroImage;

const HeroWrapper = tw.div`relative pt-16 pb-32 flex content-center items-center justify-center overflow-hidden`;
const HeroImgContainer = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const ImgOverlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const MainWrapper = tw.div`relative sm:mx-10 md:mx-20`;
const TextWrapper = tw.div`items-center flex flex-wrap`;
const TextContainer = tw.div`w-full lg:w-6/12 px-4 ml-auto mr-auto text-center`;
const HeroHeader = tw.h1`text-white font-semibold text-5xl`;
const HeroSubHeader = tw.p`mt-4 md:p-8 text-lg text-gray-300`;
