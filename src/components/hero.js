import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Bg from "../images/congxuwebsitebackground.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Colors } from "../utils/colors";
import { Translate } from "../utils/translate";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <HeroContainer>
      <HeroBg src={Bg} />
      <HeroGroup>
        <HeroTextGroup>
          <HeroH1 data-aos="fade">{Translate("DREAM.")}</HeroH1>
          <HeroH1 data-aos="fade">{Translate("CONQUER.")}</HeroH1>
          <HeroH1 data-aos="fade">{Translate("EXCEL.")}</HeroH1>
          <HeroH2 data-aos="fade">
            <HighlightedWord>{Translate("Break")}</HighlightedWord>{" "}{Translate("Free.")}
          </HeroH2>
          <SignatureSvg
            width="289"
            height="99"
            viewBox="0 0 289 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <SvgPath d="M35.2065 29.5002C47.9867 0.379751 42.9064 -2.76186 21.2066 10.5002C-0.493238 23.7623 -0.219709 76.3925 8.70656 75.0003C16.1743 80.8224 38.7076 78.6048 51.7059 49.0004C48.059 57.8147 46.8596 62.5079 47.7059 70.0004C50.3824 73.1346 52.7673 72.6125 58.7061 67.5005C64.9745 60.0156 69.2506 55.3729 70.2061 51.0005C71.7757 43.1165 71.2746 40.6231 68.7061 38.5005C65.3277 37.3159 63.4256 36.3046 60.2061 42.0005C57.9861 50.311 59.2428 51.3274 60.2061 55.0005C64.3427 60.487 66.4392 61.1022 70.2061 62.5005C76.8175 61.8164 80.1878 58.6425 85.7061 49.0004L80.2061 67.5005C92.8147 48.9252 97.4688 45.8223 104.706 43.5005C112.072 42.9915 109.699 53.7572 107.206 70.0004C109.591 72.727 121.706 62.5005 121.706 62.5005C123.243 68.9301 124.678 70.0526 127.706 70.0004C144.702 62.7401 149.529 57.4812 151.706 46.5005C151.81 37.5125 149.26 35.9499 140.706 38.5005C114.019 56.9846 128.785 69.8811 132.706 70.0004L148.206 60.0005C144.753 72.8653 141.418 80.3443 131.206 94.5005C124.463 96.8524 121.497 96.8091 121.706 87.5005C155.724 60.8907 152.586 65.5335 159.706 60.0005C159.706 60.0005 188.303 32.3252 192.706 22.5005C197.109 12.6758 203.416 8.27605 205.5 6C214.297 2.5185 212.204 2.62132 215.706 8.50049C213.208 36.7599 215.221 49.9833 220.206 72.5005C238.351 37.7447 238.687 27.7287 240.706 8.50049C224.976 34.6248 211.454 49.8651 187.706 77.0005C203.405 78.4725 209.746 66.0078 226.482 60.0005C241.542 49.4985 247.969 57.3909 251.206 43.5005C247.638 54.0273 245.698 59.9244 247.706 70.0004C259.263 69.1344 263.263 61.7028 269.706 46.5005C265.871 56.6014 265.212 62.2899 267.206 72.5005C281.155 66.5309 284.436 62.5845 286.206 55.0005" />
          </SignatureSvg>
        </HeroTextGroup>
      </HeroGroup>
    </HeroContainer>
  );
};

export default Hero;

const HighlightedWord = styled.span`
  color: ${Colors.orange};
`;

const SignatureSvg = styled.svg`
  height: 150px;
  width: 400px;

  @media screen and (max-width: 450px) {
    height: 100px;
    width: 300px;
  }
`;

const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const SvgPath = styled.path`
  stroke-dasharray: 1900;
  stroke-dashoffset: 2100;
  stroke: ${Colors.white};
  stroke-width: 4;
  animation: ${dash} 5s linear forwards;
`;

const HeroContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  display: flex;
  //justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  max-height: 1000px;
`;

const HeroBg = styled.img`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  object-fit: cover;
  object-position: 0px 40px;
  position: relative;

  max-height: 1100px;

  @media screen and (max-width: 1025px) {
    object-position: 10% 75%;
  }

  @media screen and (max-width: 775px) {
    object-position: 18% 75%;
  }
`;

const HeroGroup = styled.div`
  width: 100vw;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1025px) {
    justify-content: center;
    align-self: flex-end;
    margin-bottom: 100px;
  }
`;

const HeroTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  margin-right: 15rem;

  @media screen and (max-width: 1575px) {
    margin-right: 3.5rem;
  }

  @media screen and (max-width: 700px) {
    margin-right: 0rem;
  }
`;

const HeroH1 = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 2.5rem;
  // z-index: 1;
  // height: fit-content;
  // background: yellow;
  margin-top: -10px;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
    color: ${Colors.white};
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    margin-top: -5px;
  }

  @media screen and (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

const HeroH2 = styled.div`
  color: ${Colors.white};
  font-family: "Kdam Thmor Pro", sans-serif;
  font-size: 6rem;
  // z-index: 1;
  positon: absolute;
  margin: -20px 0px 0px -5px;
  // background: red;

  @media screen and (max-width: 1300px) {
    font-size: 5rem;
    color: ${Colors.white};
  }
  @media screen and (max-width: 450px) {
    font-size: 4rem;
    margin: -15px 0px 0px -5px;
  }

  @media screen and (max-width: 375px) {
    font-size: 3.5rem;
  }
`;
