import React from "react";
import tw from "twin.macro";

const HeroWrapper = tw.div`relative pt-16 pb-32 flex content-center items-center justify-center overflow-hidden`;
const HeroImgContainer = tw.div`absolute top-0 w-full h-full bg-center bg-cover`;
const ImgOverlay = tw.span`w-full h-full absolute opacity-50 bg-black`;
const MainWrapper = tw.div`relative sm:mx-10 md:mx-20`;
const TextWrapper = tw.div`items-center flex flex-wrap`;
const TextContainer = tw.div`w-full lg:w-6/12 px-4 ml-auto mr-auto text-center`;
const HeroHeader = tw.h1`text-white font-semibold text-5xl`;
const HeroSubHeader = tw.p`mt-4 md:p-8 text-lg text-gray-300`;

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <HeroImgContainer
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551309292-e185c0b6e22a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=750&q=80')",
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
