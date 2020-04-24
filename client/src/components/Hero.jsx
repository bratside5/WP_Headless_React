import React, { useContext, useState } from "react";
import tw from "twin.macro";
import PropertyContext from "../context/PropertyContext";

const HeroWrapper = tw.div`relative pt-16 pb-32 flex content-center items-center justify-center overflow-hidden`;
const HeroImgContainer = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const ImgOverlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const MainWrapper = tw.div`relative sm:mx-10 md:mx-20`;
const TextWrapper = tw.div`items-center flex flex-wrap`;
const TextContainer = tw.div`w-full lg:w-6/12 px-4 ml-auto mr-auto text-center`;
const HeroHeader = tw.h1`text-white font-semibold text-5xl`;
const HeroSubHeader = tw.p`mt-4 md:p-8 text-lg text-gray-300`;

const Hero = () => {
  const context = useContext(PropertyContext);
  const mapState = context.map((result) => result.x_featured_media_original);
  const [HeroImage, setHeroImage] = useState(mapState[0]);
  console.log(setHeroImage);
  return (
    <>
      <HeroWrapper>
        <HeroImgContainer
          style={{
            backgroundImage: `url('${HeroImage}')`,
          }}
        >
          <ImgOverlay id="blackOverlay"></ImgOverlay>
        </HeroImgContainer>
        <MainWrapper>
          <TextWrapper>
            <TextContainer>
              <HeroHeader>Your story starts with us.</HeroHeader>
              <HeroSubHeader>
                This is a simple example of a Landing Page you can build using
                Tailwind Starter Kit. It features multiple CSS components based
                on the Tailwindcss design system.
              </HeroSubHeader>
            </TextContainer>
          </TextWrapper>
        </MainWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
